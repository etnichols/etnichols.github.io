const _ = require(`lodash`)
const path = require("path")

exports.onCreateNode = ({ node, getNode, actions}) => {
  const { createNodeField } = actions

  if(node.internal.type === 'File'){
    // It's a directory, create a custom URL based on the name.
    const filePath = path.parse(node.absolutePath)
    const postSlug = filePath.dir.split('---')[1]
    let slug
    if(filePath.dir.includes('project')){
      slug = `/projects/${postSlug}/`
    } else {
      slug = `/posts/${postSlug}`
    }
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  } else if(node.internal.type === 'MarkdownRemark' &&
            typeof node.slug === 'undefined') {
    const fileNode = getNode(node.parent)
    // It's a Markdown node, apply slug from the parent.
    createNodeField({
      node,
      name: 'slug',
      value: fileNode.fields.slug,
    })

    // And add tagSlugs if they exist.
    if (node.frontmatter.tags) {
      const tagSlugs = node.frontmatter.tags.map(
        tag => `/tags/${_.kebabCase(tag)}/`)
      createNodeField({
        node,
        name: `tagSlugs`,
        value: tagSlugs,
      })
    }
    
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const postTemplate = path.resolve(`src/templates/postTemplate.js`)
  const tagsTemplate = path.resolve(`src/templates/tagsTemplate.js`)

  return graphql(`
    {
      allMarkdownRemark(
        limit: 1000
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              tags
              type
            }
          }
        }
      }
    }
  `).then(result => {
    const { allMarkdownRemark } = result.data

    if (result.errors) {
      return Promise.reject(result.errors)
    }

    // Create post pages.
    allMarkdownRemark.edges.forEach(({ node }) => {
      let slug = node.fields.slug
      createPage({
        path: slug,
        component: postTemplate,
        context: { slug },
      })
    })

    // Create tags pages.
    let tags = []

    allMarkdownRemark.edges.forEach(({ node }) => {
      if(_.get(node, `frontmatter.tags`)){
        tags = tags.concat(node.frontmatter.tags)
      }
    })

    tags = _.uniq(tags)
    tags.forEach(tag => {
      const path = `/tags/${_.kebabCase(tag)}/`
      createPage({
        path: path,
        component: tagsTemplate,
        context: { tag }
      })
    })
  })
}

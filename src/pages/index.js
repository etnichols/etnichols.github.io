import React from "react"
import Link from "gatsby-link"
import styles from "../styles"
import presets from "../utils/presets"
import { rhythm, scale } from "../utils/typography"

class Index extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges

    return (
      <div>
        <h1>Read a post</h1>
        <ul
          css={{
            marginBottom: rhythm(2),
            marginTop: rhythm(2),
            marginLeft: 0,
            listStyle: `none`,
          }}
        >
          {posts.map(post => (
            <li key={post.node.fields.slug}>
              <span
                css={{
                  color: styles.colors.light,
                  display: `block`,
                  [presets.Tablet]: {
                    float: `right`,
                    marginLeft: `1rem`,
                  },
                }}
              >
                {post.node.frontmatter.date}
              </span>
              <Link to={post.node.fields.slug} className="link-underline">
                {post.node.frontmatter.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`


// import React from "react"
// import Link from "gatsby-link"
// import styles from "./index.module.css"
// import Autocomplete from "react-autocomplete"
//
// // Article Container: Layout for an Article Excerpt on Home page.
// const ArticleContainer = (props) => {
//   const tags = props.node.frontmatter.tags.split(',');
//   return (
//     <div className={styles.articleContainer}>
//       <Link to={props.node.fields.slug} className={styles.linkStyle}>
//       <div className={styles.postTitleContainer}>
//       <h3 className={styles.postTitle}>
//         {props.node.frontmatter.title}
//       </h3>
//       <p className={styles.postDate}>
//         {props.node.frontmatter.date}
//       </p>
//     </div>
//       <p>
//         {props.node.excerpt}
//       </p>
//       </Link>
//       <div className={styles.tagSection}>
//         { tags.map((tag) => (
//           <TagContainer tag={tag} />
//         ))}
//       </div>
//     </div>
//   )
// }
//
// // Autocomplete Component allows users to search by tag.
// const TagSearchInput = (props) => {
//   return (
//     <div>
//       <input
//         value={props.value}
//         className={styles.searchBox}
//         onKeyPress={props.handleKeyPress}
//         onChange={props.handleChange}
//         type="text"
//         placeholder="search by tag"/>
//       <button className={styles.clearTagsButton} onClick={props.handleClear}>clear</button>
//     </div>
//
//   )
// }
//
// const TagContainer = (props) => {
//   return ( <div className={styles.tagContainer}>
//             <p className={styles.tag}>{props.tag}</p>
//           </div> )
// }
//
// class Index extends React.Component {
//   constructor(props){
//       // Set to avoid parsing duplicate tags
//       var tagSet = new Set();
//       var tagArray = []
//       props.data.allMarkdownRemark.edges.map(({node}) => {
//         let tags = node.frontmatter.tags.split(',')
//         tags.forEach((tag) => {
//           if(!tagSet.has(tag)) tagSet.add(tag)
//         })
//       })
//
//       // Now create the tag labels from the set
//       tagSet.forEach((tag) => {
//         tagArray.push({label: tag})
//       })
//
//     super(props);
//     this.state = {
//       searchedTags: [],
//       tagSet: tagArray,
//       allStories: props.data.allMarkdownRemark.edges,
//       visibleStories: props.data.allMarkdownRemark.edges,
//       searchValue: '',
//     }
//   }
//
//   handleChange(e, val){
//     //console.log("!!!" + JSON.stringify)
//     //console.log(`Handle select v: ${JSON.stringify(val)}`)
//     this.setState({
//       searchValue: val,
//     })
//   }
//
//   shouldItemRender(item, value){
//     let cleanItem = item.label.toLowerCase()
//     let ans = cleanItem.startsWith(value.toLowerCase())
//     console.log(`${JSON.stringify(item)} === ${value}? ==> ${ans}`)
//     return ans
//   }
//
//   handleSelect(e, val){
//     console.log(`val: ${val} e: ${JSON.stringify(e)}`)
//     // Push value input and clear if user hits enter.
//     if(e){
//       let curState = this.state.searchedTags;
//       if (!curState.includes(e)) curState.push(e)
//       this.setState({
//         searchedTags: curState,
//         searchValue: '',
//       }, this.updateVisibleStories.bind(this))
//     }
//   }
//
//   updateVisibleStories(){
//     const searchTags = this.state.searchedTags
//     let visibleStories = [];
//     const storyEdges = this.props.data.allMarkdownRemark.edges
//
//     for(let i=0; i < searchTags.length; i++){
//       for(let j=0; j < storyEdges.length; j++){
//         const curSearchTag = searchTags[i];
//         const storyTags = storyEdges[j].node.frontmatter.tags.split(`,`);
//         for(let k=0; k < storyTags.length; k++){
//           const curStoryTag = storyTags[k]
//           if(curSearchTag == curStoryTag) {
//             visibleStories.push(storyEdges[j]);
//           }
//         }
//       }
//     }
//     this.setState({
//       visibleStories: visibleStories
//     })
//   }
//
//   clearTag(tag){
//     return
//   }
//
//   clearTags(){
//     this.setState({
//       searchedTags: [],
//     })
//   }
//
//   render() {
//
//     const data  = this.props.data
//     const visStories = this.state.visibleStories
//     const numStories = this.state.visibleStories.length
//
//     return (
//       <div>
//           <Autocomplete
//             items={this.state.tagSet}
//             value={this.state.searchValue}
//             onChange={this.handleChange.bind(this)}
//             onSelect={this.handleSelect.bind(this)}
//             shouldItemRender={this.shouldItemRender.bind(this)}
//             getItemValue={(item) => item.label}
//             inputProps={{placeholder: "search by tag"}}
//             renderItem={(item, isHighlighted) =>
//               <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
//                 {item.label}
//               </div>
//             }
//             wrapperStyle={{marginTop: "1em",
//                            display: "inline-block",
//                            border: "1px solid #939393"
//                          }}
//           />
//         <button
//           className={styles.clearTagsButton}
//           onClick={this.clearTags.bind(this)}
//         >
//           clear tags
//         </button>
//         <div className={styles.tagSection}>
//           {this.state.searchedTags.map((tag) => <TagContainer tag={tag}/>)}
//         </div>
//           <h4 className={styles.totalPosts}>
//             {data.allMarkdownRemark.totalCount}
//             {data.allMarkdownRemark.totalCount === 1 ? " Post" : " Posts"}
//           </h4>
//         {this.state.searchedTags.length === 0 ?
//           data.allMarkdownRemark.edges.map( ({ node }) =>
//             <ArticleContainer node={node} />) :
//         visStories.map( ({node}) =>  <ArticleContainer node={node}/> )
//         }
//       </div>
//     )
//   }
// }
//
// export default Index
//
// export const IndexQuery = graphql`
//   query IndexQuery {
//     allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
//       totalCount
//       edges {
//         node {
//           frontmatter {
//             title
//             date(formatString: "DD MMMM, YYYY")
//             tags
//           }
//           fields {
//             slug
//           }
//           excerpt
//         }
//       }
//     }
//   }
// `

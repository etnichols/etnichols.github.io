webpackJsonp([34464333285631],{470:function(e,t){e.exports={data:{markdownRemark:{html:'<p>I designed and implemented a MIPS Single Cycle CPU as the final project for my Computer Architecture class at KU, EECS 645. The CPU is comprised of 17 separate components, which we developed individually throughout the semester. The CPU takes in 32-bit instructions, and can be tested using a workbench in Vivado.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/3e6e7f0a35b35f25459c331de91e7cf3-1227d.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 504px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 67.71428571428572%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAA9hAAAPYQGoP6dpAAACWklEQVQ4y22TCY/aQAyF+f8/i0otEnsRcocckPuCENgQSvGrxysQLTuSNclk5ovt92ay3W7pMcIwJG2xoE0ck+d5FAQB+b5PoW5QYFj/hLtYUumHtN/vCYDE5HA4oG1bJEmC4/EINZbLJWazGXw/QJqmcGwLoe2iKApUVYU4jpGsVtjtdmibRubbmDS8QEQYxxGWZQucM5L5FnmeI4/WAlJhGCY2rifPp67D4xDg+XxGWZYCpfGMVtNBh0/Qbg9qtqBNgjEvwa3AYqGh4fffRQ1KC6nzCfg4cneFjx8/QXGCqxfiagegpETvBhgjXksKXl+Dghjkr3E1XFzfdVx1F9Qfn4HUc0+LElRxKzYZKK9xtTz0XoBzXoE+T5z1DlRyhipLruR+tu2+Bza6yaBKekstH96k6Nstzl2P0+kk0Pv+x+cbUKkbRZHEMS/w8vICl/voOA4i14VyguqxAqZJypBB+q3ODd0ewzB8/UgBVyx/XdcIWNksyzBUNWa/ZjDnr6y6hel0CpNnTdNQstLKRuHKl2/z+fxLSK5EQS/cgolhGDBNEzWDSvZZbNpgQyNgL7LJYbOV2LiibrRYyp4gjDjTRM4p62RpxnsjhB8aJorc9738QZ6zHDrDVAaO7WC9XosP397e4XMLlLHHuuH3N6moYpg653JrYsvB5D8biSg2w1SWl8tFNtu2LaUqQMbllktTeir7h5NEm2Tiz2+BHbtfCaSumvqzEsfzViIOscH/6F9Avvv3kGvIt+oZyMop6HYT48CK77mkhvvjvr4j56yJVaVdh++GAv4F+REZG4HwOTcAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="CPU Block Diagram"\n        title=""\n        src="/static/3e6e7f0a35b35f25459c331de91e7cf3-1227d.png"\n        srcset="/static/3e6e7f0a35b35f25459c331de91e7cf3-86784.png 185w,\n/static/3e6e7f0a35b35f25459c331de91e7cf3-4c24c.png 370w,\n/static/3e6e7f0a35b35f25459c331de91e7cf3-1227d.png 700w"\n        sizes="(max-width: 504px) 100vw, 504px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Using MARS, a MIPS Assembler and Runtime simulator, I converted the following assembly program into 32-bit instructions that the CPU could recognize. The output was placed into the instruction memory component.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>    addi $t0, $zero, 5\n    addi $t1, $zero, 7\n    start:\tsw\t$t0,  0($sp)\n    sw\t$t1, -4($sp)\n    lw\t$s0,  0($sp)\n    lw\t$s1, -4($sp)\n    beq\t$s0, $s1, Else\n    add\t$s3, $s0, $s1\n    j\tExit\n    Else:\tsub\t$s3, $s0, $s1\n    Exit:\tadd\t$s0, $s0, $s3\n    or\t$s1, $s1, $s3\n    addi\t$t0, $t0,  3\n    addi\t$t1, $t1,  3\n    addi\t$sp, $sp, -8\n        j\tstart</code></pre>\n      </div>\n<p>I confirmed the CPU was working correctly by comparing its final register values to that of the MARS simulator after running the assembly program.</p>\n<p>The CPU does not support recurisve functions because I did not implement the Jump And Link (JAL) MIPS instructions,</p>\n<p>As a CS student, I rarely venture this deep into the EE/CoE side of the spectrum. This project was a great exercise in learning the basics of CPU architecture. Understanding how programs are compiled and interpreted by the CPU as MIPS instructions provided a great complement to the work I do in higher-level programming languages. There is a certain “completeness” I feel now understanding how, say, a C program is transformed into object code and executed by a CPU. With that said, I think I’ll stick to the high-level languages.</p>\n<p>Check out the code for this project <strong><a href="https://github.com/e-nichols/EECS_645/tree/master/MIPS_Single_Cycle_CPU">here</a></strong>.</p>',timeToRead:1,tableOfContents:"",fields:{tagSlugs:["/tags/computer-architecture/","/tags/mips/"]},frontmatter:{title:"MIPS Single Cycle CPU",tags:["Computer Architecture","MIPS"],date:"June 01, 2014",author:{id:"Evan Nichols",bio:"Software Engineer and outdoor enthusiast. EngRes @ Google NYC.",avatar:{children:[{responsiveResolution:{src:"/static/4c8a15d8009c77284919b7aa2785b3cc-88e85.jpg",srcSet:"/static/4c8a15d8009c77284919b7aa2785b3cc-88e85.jpg 1x,\n/static/4c8a15d8009c77284919b7aa2785b3cc-db17a.jpg 1.5x,\n/static/4c8a15d8009c77284919b7aa2785b3cc-599b9.jpg 2x,\n/static/4c8a15d8009c77284919b7aa2785b3cc-3e248.jpg 3x"}}]}}}}},pathContext:{slug:"/mips-single-cycle-cpu/"}}}});
//# sourceMappingURL=path---mips-single-cycle-cpu-045dadb4b03995726231.js.map
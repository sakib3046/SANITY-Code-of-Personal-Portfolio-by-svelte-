export default{
    name:'blog',
    title:'Blog',
    type:'document',
    fields:[
        {
            name:'blog_title',
            title:'Blog Title',
            type:'string'
        },
        { 
            name: 'content',
            type: 'array',
            title: 'Content',
            of: [
              {
                type: 'block'
              },
              {
                type: 'image',
                options: {
                    hotspot: true,
                  }
              }
            ]
        }
    ]
}
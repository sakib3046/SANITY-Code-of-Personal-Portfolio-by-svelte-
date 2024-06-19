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
            title: 'Blog Date',
            name: 'blog_date',
            type: 'datetime',
            options: {
              dateFormat: 'DD-MMM-YYYY',
              timeFormat: 'hh:mm A',
              timeStep: 5,
              calendarTodayLabel: 'Today'
            }
        },

        {
            name:'blog_image',
            title:'Blog Image',
            type:'image' ,
            options: {
                hotspot: true,
              }   
        },
        { 
            name: 'content',
            type: 'array',
            title: 'Content',
            of: [
              {
                type: 'block',
                styles: [
                    {title: 'Normal', value: 'normal'},
                    {title: 'H1', value: 'h1'},
                    {title: 'H2', value: 'h2'},
                    {title: 'H3', value: 'h3'},
                    {title: 'H4', value: 'h4'},
                    {title: 'H5', value: 'h5'},
                    {title: 'H6', value: 'h6'},
                    {title: 'Quote', value: 'blockquote'}
                  ]
              },
              {
                type: 'image',
                options: {
                    hotspot: true,
                  }
              },
              {
                type:'code'
              }
            ]
        },

    ]
}
export default{
    name:'header',
    title:'header',
    type:'document',
    fields:[
        {
            name: 'name',
            title: 'Name',
            type: 'string',
          },
        {
            name: 'portrait',
            title: 'Portrait',
            type: 'image',
            options: {
              hotspot: true,
            }
          },
    ]
}
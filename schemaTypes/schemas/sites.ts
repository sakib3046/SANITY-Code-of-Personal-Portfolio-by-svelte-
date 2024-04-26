export default{
    name:'site',
    title:'site',
    type:'document',
    fields:[
        {
            name:'logoname',
            title:'Logo',
            type:'string'
        },
        {
            name: 'logo',
            title: 'Logo',
            type: 'image',
            options: {
              hotspot: true,
            }
          },
    ]
}

const DataScroing = (data,Taags,slugs)=>{
    let TagScore = 0;
    let i;
    data.forEach((element) => {
        TagScore = 0;
        element.tags.forEach(Tag =>{
            if(Taags.includes(Tag.slug)){
                TagScore = TagScore +1;
            }
        })
        element.TagScore = TagScore;
        // slugs.forEach((SLUGS)=>{
        //     if(element.slug.includes(SLUGS)){
        //         data.splice(index,1)
        //     }
        // })
        
    }) 
    data.sort((a,b) =>  b.TagScore-a.TagScore )
    for (i=data.length-1; i>=0; i--){
        slugs.forEach((SLUGS)=>{
            if(data[i].slug.includes(SLUGS)){
                data.splice(i,1)
        }})
    }
    return(data)
    ;
}

export default DataScroing;
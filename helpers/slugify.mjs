


//function to make a slug from a name

export default function slugify(name){
    var slug = name.trim().replace(/ /g , '-');
    return slug ;
}
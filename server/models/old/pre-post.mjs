
import Counter from './counter.mjs'


function myPre(schema, row , prop){
    schema.pre('save', async function() {
        const k = this ;
        let item = await Counter.findOne({coll : row})
        try{
            console.log('hi from pre save')
            k[prop] = item.count
            
        }catch(err){
            console.log(`from pre error is : ${err}`)
        }
    });

}

function myPost(schema, row ){
    schema.post('save', function() {
        Counter.findOneAndUpdate({coll : row }, {$inc:{count : 1}},{new:true} )
        .then((cou)=>{
            console.log('hi from post save')
            console.log(`counter became : ${cou.count}`)
        })
        .catch((err)=>console.log(`error is : ${err}`))
    });
}
    

export default {myPre, myPost} 



/* 

function myPre(schema, row , prop){
    schema.pre('save', async function() {
        const k = this ;
        await Counter.findOne({coll : row})
        .then((item)=>{
            console.log('hi from pre save')
            k[prop] = item.count
    
        })
        .catch((err)=>console.log(`from pre error is : ${err}`))
    });

}

function myPost(schema, row ){
    schema.post('save', function() {
        Counter.findOneAndUpdate({coll : row }, {$inc:{count : 1}},{new:true} )
        .then((cou)=>{
            console.log('hi from post save')
            console.log(`counter became : ${cou.count}`)
        })
        .catch((err)=>console.log(`error is : ${err}`))
    });
}

*/
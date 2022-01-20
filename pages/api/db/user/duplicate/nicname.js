
import User from '../../../../../model/userSchema'
import dbConnect from '../../../../../utils/dbConnect'


dbConnect();

export default async function handler(req, res){
    const target = req.body.nicname;
    console.log(target);
    if(req.method === 'POST' && target ){
        const getData = await User.findOne({ nicname : target }); //DB 조회
        if(getData === null) res.status(200).send({error : null});
        else res.status(200).send({error : 'Registered Nicname'});
    }else{
        res.status(400).send('404 not found');
    }
}
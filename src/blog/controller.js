const {Blog}= require("./model");


const createNewBlog = async (request,response) =>{
    console.log(request.body);
    var newBlog = await (await Blog.create(request.body)).populate("user_id");
    //newBlog mai blog ka schema hai, uss mai sirf user_id hai but hame frontend par sirf user_id nahi user ki saare detals bh bhejne hai toh dubara database query karke isse hai ham populate() methode use kar sakte hai. popultae() always takes only object not string or something, and we get expandeed data!
    //now newBlog mai user_id bhi populate ho jaege!
    return response.json({status:"Blog created",newBlog});
}

module.exports={createNewBlog};
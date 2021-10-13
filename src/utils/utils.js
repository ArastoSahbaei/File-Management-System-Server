const escapeRegex = (text) => {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
};

// router.get("/", function(req, res) {
//     if (req.query.search) {
//        const regex = new RegExp(escapeRegex(req.query.search), 'gi');
//        Jobs.find({ "name": regex }, function(err, foundjobs) {
//            if(err) {
//                console.log(err);
//            } else {
//               res.render("jobs/index", { jobs: foundjobs });
//            }
//        }); 
//     }
// }

export default {
    escapeRegex
}
// express모듈과 router() 함수 불러온다. router에서 controller 연결한다. 
const express = require('express');
const router = express.Router();
const user = require('../controller/UserController') 

// '/' 경로에서 컨트롤러의 get_index 함수 실행 
router.get('/', user.get_index);

router.post("/signup", user.post_signup); 
router.post("/signin", user.post_signin);

router.get("/profile", user.get_profile);
// router.post("/profile", user.profile);
router.post("/profile/edit", user.profile_edit);
router.post("/profile/delete", user.profile_delete);

// router로 만든 모듈을 내보낸다. 
module.exports = router;
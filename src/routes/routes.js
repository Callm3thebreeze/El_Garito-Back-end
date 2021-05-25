const express = require("express");
const router = express.Router();
const userController = require("../controllers/user")
const infoController = require("../controllers/info")
const memberController = require("../controllers/member")
const albumController = require("../controllers/album")
const socialController = require("../controllers/social")

/* const profileController = require("../controllers/profile") */
const passport = require("../auth/auth")

//Profile
/* router.post("/profile", profileController.saveProfile)
router.get("/profile", profileController.getProfiles)
router.get("/profile/:username", profileController.getProfile)
router.put("/profile/:id", profileController.updateProfile)
router.delete("/profile/:id", profileController.deleteProfile) */



//Users
router.get("/artists", userController.getUsers)
router.get("/:username", userController.getUser)


// Auth
router.post("/signup", userController.signup)
router.post("/login", userController.login)
router.get("/", passport.auth, userController.userDetail)

// Info
 router.put("/artist/info", passport.auth, infoController.addInfo) 


// Member
 router.put("/artist/member", passport.auth, memberController.addMember) 


 // Discography
 router.put("/artist/album", passport.auth, albumController.addAlbum) 

 // Discography
 router.put("/artist/social", passport.auth, socialController.addSocial) 

 //Delete
 router.delete("/artist/delete", passport.auth, userController.deleteUser) 



module.exports = router; 


var Facebook = /** @class */ (function () {
    //constructor 
    function Facebook(firstprofile, lastprofile, id, langu, date_birth, hometown, education, work, hobbie, contact, email, website, relationship, skill) {
        var _this = this;
        this.firstprofile = firstprofile;
        this.lastprofile = lastprofile;
        this.id = id;
        this.langu = langu;
        this.date_birth = date_birth;
        this.hometown = hometown;
        this.education = education;
        this.work = work;
        this.hobbie = hobbie;
        this.contact = contact;
        this.email = email;
        this.website = website;
        this.relationship = relationship;
        this.skill = skill;
        this.dateOfBirth = function () {
            console.log("Date of Birth:" + _this.date_birth);
        };
        this.studied = function () {
            console.log("Education:" + _this.education);
        };
        this.homeTown = function () {
            console.log("Home Town:" + _this.hometown);
        };
        this.working = function () {
            console.log("work:" + _this.work);
        };
        this.hobbies = function () {
            console.log("Hobbies:" + _this.hobbie);
        };
        this.email_address = function () {
            console.log("Mail Address:" + _this.email);
        };
        this.website_link = function () {
            console.log("Website Address:" + _this.website);
        };
        this.relation = function () {
            console.log("Relationships:" + _this.relationship);
        };
        this.skills = function () {
            console.log("Skills:" + _this.skill);
        };
        this.firstprofile = firstprofile;
        this.lastprofile = lastprofile;
        this.id = id;
        this.langu = langu;
        this.date_birth = date_birth;
        this.hometown = hometown;
        this.education = education;
        this.work = work;
        this.hobbie = hobbie;
        this.contact = contact;
        this.email = email;
        this.website = website;
        this.relationship = relationship;
        this.skill = skill;
    }
    //functions 
    Facebook.prototype.greeter = function () {
        document.body.innerHTML = ("Hello, " + this.firstprofile + " " + this.lastprofile);
    };
    Facebook.prototype.userid = function () {
        console.log("User ID:" + this.id);
    };
    Facebook.prototype.language = function () {
        console.log("Language:" + this.langu);
    };
    Facebook.prototype.contact_nmuber = function () {
        console.log("Contact Number:" + this.contact);
    };
    return Facebook;
}());
var profile = new Facebook("Jane", "dinesh", 105145613, "kannada", "12/12/12", "mysore", "SLH college mysore", "bangalore", ["palying", "reading", "coding"], 8970518654, "someone@gmail.com", "abc-this.com", "single", ["painting", "dancing", "singing"]);
profile.greeter();
profile.userid();
profile.language();
profile.dateOfBirth();
profile.homeTown();
profile.studied();
profile.working();
profile.hobbies();
profile.contact_nmuber();
profile.email_address();
profile.website_link();
profile.relation();
profile.skills();

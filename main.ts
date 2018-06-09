
class Facebook {

    //constructor 
    constructor(public firstprofile: string, public lastprofile: string,
        public id: number,
        public langu: string, public date_birth: Date,
        public hometown: string,
        public education: string,
        public work: string, 
        public hobbie:string[],
        public contact:number,
        public email:string,
        public website:string,
        public relationship:string,
        public skill:string[]    )
        
    //fields 
        {

        this.firstprofile = firstprofile;
        this.lastprofile = lastprofile;
        this.id = id;
        this.langu = langu;
        this.date_birth = date_birth;
        this.hometown = hometown;
        this.education = education;
        this.work = work;
        this.hobbie=hobbie;
        this.contact=contact;
        this.email=email;
        this.website=website;
        this.relationship=relationship;
        this.skill=skill;
        
            }
//functions 
    greeter() {
        document.body.innerHTML = ("Hello, " + this.firstprofile + " " + this.lastprofile);
    }
    userid() {
        console.log("User ID:" + this.id);
    }
    language() {
        console.log("Language:" + this.langu)
    }
    dateOfBirth=()=> {
        console.log("Date of Birth:" + this.date_birth)
    }
    studied=()=> {
        console.log("Education:" + this.education)
    }

    homeTown=()=> {
        console.log("Home Town:" + this.hometown)
    }
    working=()=>{
        console.log("work:" + this.work)
    }
    hobbies=()=>{
        console.log("Hobbies:"+this.hobbie)
    }
    contact_nmuber(){
        console.log("Contact Number:"+this.contact)
    }
    email_address=()=>{
        console.log("Mail Address:"+this.email)
    }
    website_link=()=>{
        console.log("Website Address:"+this.website)
    }
    relation=()=>{
        console.log("Relationships:"+this.relationship)
    }
    skills=()=>{
        console.log("Skills:"+this.skill)
    }
  
}

let profile = new Facebook("Jane", "dinesh", 105145613, "kannada", "12/12/12","mysore",
                    "SLH college mysore", "bangalore",["palying","reading","coding"],8970518654,
                    "someone@gmail.com","abc-this.com","single",["painting","dancing","singing"]);
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






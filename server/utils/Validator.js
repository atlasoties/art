class Validator {
	constructor(name,email,password,dob){
		this.name=name;
		this.email=email; 
		this.password=Password;
		this.dob=dob; 
	}

	 isEmpty(name,email,password,dob){
		if(name && email && password && dob){
			return false;
		}
	}
}

module.exports =Validator;
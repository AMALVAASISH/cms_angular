export class Appointments {
    id: number=0;
    appointment_id: string=';'
    patient_id : number=0;
    doctor_id : number=0;
    specialization_id : number=0;
    appointment_date : Date = new Date;
    token_no : number=0;
    doctor_name: string='';
    specialisation: string=';'
    consultationfees : number=0;
    status: boolean=true;

}
export class Doctors{

    doctor_id : number=0;
    staff : string=';'
    department : string=';'
    specialization : number=0;
    consultationfees : number=0;
    doctor_name: string='';
    specialisation: string='';
    department_name: string='';
    specialization_id : number=0;
    

}
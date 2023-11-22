export class Recepbills {

    id: number=0;
    bill_no: number=0;
    bill_amount: number=0;
    bill_date: Date = new Date;
    token_no: number=0;
    status: string[] = ['paid'];
    appointment_id: number=0;
    patient_id: number=0;
    consultationfees: number=0;
    doctor_name: string='';
    doctor_id: number=0;
    statusOption: string='';
}

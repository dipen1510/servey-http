/* * * ./app/comments/model/comment.ts * * */
export class Survey {
    constructor(
        public survey_name: string, 
        public description: string, 
        public survey_type: string,
        public scheduled_time: number,
        public Executed_date: Date,
        public Neighbourhood: string
        ){}
}
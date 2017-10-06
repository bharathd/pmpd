/**
 * New typescript file
 */

export class AddProject {
    constructor(
        public PROJECT_NAME: string,
        public PROJECT_DESCRIPTION: string,
        public PROJECT_DURATION: string,
        public PROJECT_START_DATE:Date,
        public PROJECT_END_DATE:Date,
         public PROJECT_TOOLS_USED: string,
         public PROJECT_TEAM_MEMBER_ID: string,
         public TEAM_SIZE: number,
         public PROJECT_SCRUM: string,
         public PROJECT_DOCUMENTS: string,
         public PROJECT_SPRINT: string
    ) {  }
}
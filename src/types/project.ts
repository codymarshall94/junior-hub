interface ProjectListing {
    id: string;
    created_at: Date;
    created_by: string;
    name: string;
    description: string;
    status: string;
    team_count: number;
    stack: string[];
    project_id: string;
    members: string[];
}

export default ProjectListing;
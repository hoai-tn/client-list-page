import { ClientHeadCell } from './../interfaces/index';
export const ClientheadCells: readonly ClientHeadCell[] = [
    {
        id: "name",
        numeric: false,
        label: "Client Name",
    },
    {
        id: "primaryContact",
        numeric: false,
        label: "Client Primary Contact",
    },
    {
        id: "mostRecentProject",
        numeric: false,
        label: "Most Recent Project",
    },
    {
        id: "projectStatus",
        numeric: false,
        label: "Project Status",
    },
    {
        id: "accountManager",
        numeric: false,
        label: "Account Manager",
    },
    {
        id: "numberOfProjects",
        numeric: true,
        label: "Number of projects",
    },
    {
        id: "allTimeBilled",
        numeric: true,
        label: "All-time Billed ($)",
    },
];
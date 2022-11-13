export interface ClientHeadCell {
    id: keyof Client;
    label: string;
    numeric: boolean;
}

export interface Client {
    id: string;
    name: string;
    primaryContact: string;
    mostRecentProject: string;
    projectStatus: string;
    accountManager: string;
    numberOfProjects: number;
    allTimeBilled: number;
}

export type Order = "asc" | "desc";
export interface ClientTableProps {
    onRequestSort: (
        event: React.MouseEvent<unknown>,
        property: keyof Client
    ) => void;
    order: Order;
    orderBy: string;
}

export interface IClientForm {
    id: string,
    name: string;
    primaryContact: string;
    accountManager: string;
}

export interface ClientBoardProps {
    clientsList: Client[];
}

export type Action = "Create" | "Update"
export interface IClientFormDialog {
    isOpen: boolean;
    action?: Action;
    client?: Client;
    onSubmitForm: (clientForm: Client, action: Action) => void;
    onClose: () => void;
}
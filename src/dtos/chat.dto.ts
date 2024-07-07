export interface RequestCreateChatRoomDTO{
    title : string;
    u_id : number;   
};

export interface RequestGetChatRoomDTO{
    r_id : number;
}

export interface RequestCreateMessageDTO{
    r_id : number;
    u_id : number;
    m_content : string;
};

export interface RequestGetMessageDTO{
    m_id : number;
}
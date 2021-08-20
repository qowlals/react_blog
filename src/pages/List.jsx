import React from "react"; // useRef 사용

function UserList() {
    const users = [
        {
            id: 1,
            username: "JIMIN",
            title: "오늘은 소고기를 먹었다",
            content: "오늘은 저녁메뉴로 소고기를 먹었는데 역시 소고기는 소고기다 너무 개꿀맛띠"
        },
        {
            id: 2,
            username: "JIMIN",
            title: "오늘은 운동을 했다",
            content: "오늘은 학교 쉬는시간에 푸쉬업 15개 5set 중량 10키로 푸쉬업 10개 5set를 진행했다 너무 맛있다"
        },
        {
            id: 3,
            username: "JIMIN",
            title: "오늘은 리액트 수업 했다",
            content: "오늘은 선생님께 리액트를 배우면서 수업을 들었다 역시 배움은 즐겁다"
        },
        {
            id: 4,
            username: "JIMIN",
            title: "오늘은 일을 좀 했다",
            content: "오늘은 음 그냥 일을 좀 했다 헤헤"
        },
    ]
    return (
        <div>
            <div>
                <b>{users[0].username}</b><span>({users[0].id})</span><span>미리보기 : {users[0].content}</span>
            </div>
            <div>
                <b>{users[1].username}</b><span>({users[1].id})</span><span>미리보기 : {users[1].content}</span>
            </div>
            <div>
                <b>{users[2].username}</b><span>({users[2].id})</span><span>미리보기 : {users[2].content}</span>
            </div>
            <div>
                <b>{users[3].username}</b><span>({users[3].id})</span><span>미리보기 : {users[3].content}</span>
            </div>
        </div>
    )
}

export default UserList;
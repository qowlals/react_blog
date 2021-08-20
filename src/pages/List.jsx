/* eslint-disable import/no-anonymous-default-export */
import React from "react"; // useRef 사용
import { Link } from "react-router-dom";

function User({ user }) {
    return (
        <div>
            <b>{user.id}. </b><Link exact to="/List/DetailPage">{user.content}</Link>
        </div>
    );
}
export const users = [
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
function UserList() {

    return (
        <div>
            {
                users.map(user => (
                    <User user={user} key={user.id} />
                ))
            }
        </div>
    )
}

export default UserList;
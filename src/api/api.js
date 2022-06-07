import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'api-key': '920503b9-def9-490e-b52b-8377e0726722',
    }
})

export const authAPI = {
    getAuthUser() {
        return  instance.get(`auth/me`).then(response => {
            return response.data;
        })
    },
}

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data;
        })
    },
    follow(userId) {
        return instance.post(`follow/${userId}`).then(response => {
            return response.data;
        })
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`).then(response => {
            return response.data;
        })
    },
}

export const profileAPI = {
    getUserProfile(userId) {
        return instance.get(`profile/${userId || 24343}`).then(response => {
            return response.data;
        })
    },
}
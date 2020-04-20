import * as axios from "axios/index";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': '294c0237-877d-46a2-9429-1d801ed3496b'
    }
});

export const userAPI = {
    getUsers(currentPage = 1, pagesSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pagesSize}`)
        .then(response => {
            return response.data;
        })
    },
    getProfile(userId) {
        return profileAPI.getProfile(userId)
    },
    deleteUnfollow(userId) {
        return instance.delete(`follow/${userId}`)

    },
    postFollow(userId) {
        return instance.post(`follow/${userId}`)

    }

};


export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId) {
        return instance.get(`/profile/status/${userId}`)
    },

    putStatus(textStatus) {
        return instance.put(`/profile/status`, {status: textStatus})
    },

};

export const authAPI = {
    me() {
        return instance.get('auth/me')
    },
    login(email, password, rememberMe = false) {
        return instance.post('auth/login', {email, password, rememberMe})
    },
    logout() {
        return instance.delete('auth/login')
    }
};



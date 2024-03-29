"use client";
import { API_BASE_URL } from "./utils/constants";
import Cookies from "js-cookie";

const getToken = () => {
  let token;
  token = Cookies.get("token");
  return token;
}; // not working

const store = { token: getToken() };

const REACT_API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || API_BASE_URL;
// const X_API_KEY = process.env.REACT_APP_X_API_KEY;

/**
 * API service methods to make life easier
 */
export const API = {
  /**
   * Execute a query
   * @param url
   * @param method
   * @param body
   * @returns
   */
  execute: async (url, method = "GET", data = null) => {
    let body = null;
    let value = null;
    if (data) {
      body = new FormData();
      for (const key in data) {
        // console.log({ key: key, value: data[key], type: typeof (data[key]) });
        value = data[key];
        body.append(key, data[key]);
      }
    }

    let headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };

    let res = await fetch(`${REACT_API_BASE_URL}${url}`, {
      method: method,
      credentials: "include",
      headers,
      body: data ? JSON.stringify(data) : null,
    });

    if (res.status == 401) {
      await fetch(`/api/logout`);
      window.location.replace("/auth/login");
    }

    return Promise.all([
      res.status,
      res.status != 204 ? res.json() : {},
      res.ok,
    ]);
  },

  /**
   * Process the response after the query has been executed
   * @param res
   * @returns
   */
  processResponse: (res) => {
    if (!res[2] && res[0] !== 204) {
      console.error({ error: res });
      const error = new Error(
        res[1]?.message || `Err while processing request`
      );
      error.status = res[0];
      throw error;
    } else if (res[0] === 204) {
      return { status: res[0] };
    }
    return res[1];
  },

  // Common APIs

  signup: async (data) => {
    let res = await API.execute(`/register`, "POST", data);
    return API.processResponse(res);
  },

  login: async (data) => {
    let res = await API.execute(`/login`, "POST", data);
    return API.processResponse(res);
  },

  logout: async (data) => {
    let res = await API.execute(`/logout`, "POST", data);
    return API.processResponse(res);
  },

  forgotPassword: async (data) => {
    let res = await API.execute(`/forgot-password`, "POST", data);
    return API.processResponse(res);
  },

  resetPassword: async (data) => {
    let res = await API.execute(`/reset-password`, "POST", data);
    return API.processResponse(res);
  },

  me: async () => {
    let res = await API.execute(`/auth-user`, "GET");
    return API.processResponse(res);
  },

  getServices: async () => {
    let res = await API.execute(`/services`, "GET");
    return API.processResponse(res);
  },

  getPortalBanks: async () => {
    let res = await API.execute(`/banks`, "GET");
    return API.processResponse(res);
  },

  // Member APIs

  overview: async (duration) => {
    let res = await API.execute(`/overview/${duration}`, "GET");
    return API.processResponse(res);
  },

  wallet: async () => {
    console.log("token", Cookies.get("token"));
    let res = await API.execute(`/user/wallet`, "GET");
    return API.processResponse(res);
  },

  updateMe: async (data) => {
    let res = await API.execute("/user/update", "PUT", data);
    return API.processResponse(res);
  },

  fundRequests: async (url) => {
    let res = await API.execute(url || `/user/fund-requests`, "GET");
    return API.processResponse(res);
  },

  newFundRequest: async (data) => {
    let res = await API.execute(`/user/fund-requests`, "POST", data);
    return API.processResponse(res);
  },

  ledger: async (url, query) => {
    let res = await API.execute(
      url ||
        `/user/report/ledger?${
          query
            ? Object.keys(query)
                .map(
                  (key) =>
                    encodeURIComponent(key) +
                    "=" +
                    encodeURIComponent(query[key])
                )
                .join("&")
            : ""
        }`,
      "GET"
    );
    return API.processResponse(res);
  },

  reportPayouts: async (url, query) => {
    let res = await API.execute(
      url ||
        `/user/report/payout?${
          query
            ? Object.keys(query)
                .map(
                  (key) =>
                    encodeURIComponent(key) +
                    "=" +
                    encodeURIComponent(query[key])
                )
                .join("&")
            : ""
        }`,
      "GET"
    );
    return API.processResponse(res);
  },

  // Transaction Related APIs

  doPayout: async (data) => {
    let res = await API.execute(`/user/services/payout`, "POST", data);
    return API.processResponse(res);
  },

  // Admin APIs

  adminGetUsers: async (query, url) => {
    let res = await API.execute(
      url ||
        `/admin/manage-user/users?${
          query
            ? Object.keys(query)
                .map(
                  (key) =>
                    encodeURIComponent(key) +
                    "=" +
                    encodeURIComponent(query[key])
                )
                .join("&")
            : ""
        }`,
      "GET"
    );
    return API.processResponse(res);
  },

  adminGetUserInfo: async (id) => {
    let res = await API.execute(`/admin/manage-user/users/${id}`, "GET");
    return API.processResponse(res);
  },

  adminUpdateUserInfo: async (id, data) => {
    let res = await API.execute(`/admin/manage-user/user/${id}`, "PUT", data);
    return API.processResponse(res);
  },

  adminBlockUser: async (id) => {
    let res = await API.execute(`/admin/manage-user/users/${id}`, "DELETE");
    return API.processResponse(res);
  },

  adminUnblockUser: async (id) => {
    let res = await API.execute(`/admin/manage-user/restore/${id}`, "PUT");
    return API.processResponse(res);
  },

  adminUpdateUser: async (id, data) => {
    let res = await API.execute(`/admin/manage-user/users/${id}`, "PUT", data);
    return API.processResponse(res);
  },

  adminSendCredentials: async (id, data) => {
    let res = await API.execute(
      `/admin/manage-user/send-credentials/${id}`,
      "PUT",
      data
    );
    return API.processResponse(res);
  },

  adminGetUserPermissions: async (id) => {
    let res = await API.execute(`/admin/manage-user/permissions/${id}`, "GET");
    return API.processResponse(res);
  },

  adminUpdateUserPermissions: async (id, data) => {
    let res = await API.execute(
      `/admin/manage-access/sync-user-permissions/${id}`,
      "PUT",
      data
    );
    return API.processResponse(res);
  },

  adminPendingFundRequests: async (query, url) => {
    let res = await API.execute(
      url ||
        `/admin/fund-requests?status=${"pending"}${
          query
            ? `&` +
              Object.keys(query)
                .map(
                  (key) =>
                    encodeURIComponent(key) +
                    "=" +
                    encodeURIComponent(query[key])
                )
                .join("&")
            : ""
        }`,
      "GET"
    );
    return API.processResponse(res);
  },

  adminApproveFundRequest: async (id) => {
    let res = await API.execute(`/admin/fund-requests/${id}`, "PUT", {
      status: "approved",
    });
    return API.processResponse(res);
  },

  adminRejectFundRequest: async (id, adminRemarks) => {
    let res = await API.execute(`/admin/fund-requests/${id}`, "PUT", {
      status: "rejected",
      admin_remarks: adminRemarks,
    });
    return API.processResponse(res);
  },

  adminUpdateService: async (id, data) => {
    let res = await API.execute(`/admin/controls/services/${id}`, "PUT", data);
    return API.processResponse(res);
  },

  adminGetPortalBanks: async () => {
    let res = await API.execute(`/admin/controls/bank`, "GET");
    return API.processResponse(res);
  },

  adminAddPortalBank: async (data) => {
    let res = await API.execute(`/admin/controls/bank`, "POST", data);
    return API.processResponse(res);
  },

  adminUpdatePortalBank: async (id, data) => {
    let res = await API.execute(`/admin/controls/bank/${id}`, "PUT", data);
    return API.processResponse(res);
  },

  adminDeletePortalBank: async (id) => {
    let res = await API.execute(`/admin/controls/bank/${id}`, "DELETE");
    return API.processResponse(res);
  },

  adminGetPlans: async () => {
    let res = await API.execute(`/admin/plans`, "GET");
    return API.processResponse(res);
  },

  adminUpdatePlan: async (id, data) => {
    let res = await API.execute(`/admin/plans/${id}`, "PUT", data);
    return API.processResponse(res);
  },

  adminGetAllRoles: async () => {
    let res = await API.execute(`/admin/manage-access/roles`, "GET");
    return API.processResponse(res);
  },

  adminGetAllPermissions: async () => {
    let res = await API.execute(`/admin/manage-access/permissions`, "GET");
    return API.processResponse(res);
  },

  adminGetRolePermissions: async (id) => {
    let res = await API.execute(
      `/admin/manage-access/role-permissions/${id}`,
      "GET"
    );
    return API.processResponse(res);
  },

  adminUpdateRolePermissions: async (id, data) => {
    let res = await API.execute(
      `/admin/manage-access/sync-role-permissions/${id}`,
      "PUT",
      data
    );
    return API.processResponse(res);
  },

  // Commission related APIs

  adminGetCommission: async (packageId, roleId, service, serviceType) => {
    let res = await API.execute(
      `/admin/commissions/get-commission/${packageId}?service=${service}&role_id=${roleId}&service_type=${serviceType}`,
      "GET"
    );
    return API.processResponse(res);
  },

  adminCreateCommission: async (data) => {
    let res = await API.execute(
      `/admin/commissions/create-commission`,
      "POST",
      data
    );
    return API.processResponse(res);
  },

  adminUpdateCommission: async (id, service, data) => {
    let res = await API.execute(
      `/admin/commissions/update-commission/${id}?service=${service}`,
      "PUT",
      data
    );
    return API.processResponse(res);
  },

  adminDeleteCommission: async (id, service) => {
    let res = await API.execute(
      `/admin/commissions/update-commission/${id}?service=${service}`,
      "DELETE"
    );
    return API.processResponse(res);
  },
};

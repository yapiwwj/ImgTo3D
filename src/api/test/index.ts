import request from "@/utils/request.ts";
import type {
  GetCourseContentResponse,
  GetTipContentResponse,
  UpdateTipContent,
  UpdateCourseContent,
} from "./type";

enum API {
  KNOWLEDGE_GET_URL = "/courseware/knowledge/get",
  TIP_GET_URL = "/courseware/knowledge/get/point",
  TIP_UPDATE_POST_URL = "/courseware/knowledge/update/point",
  CONTENT_UPDATE_POST_URL = "/courseware/knowledge/update",
  TEST_GET_URL = "/users/getAllUsers",
  TEST_POST_URL = "/users/addUser",
  IMAGE_ADD_POST_URL = "/imgs/addImg",
  OBJECT_ADD_POST_URL = "/obj/addObj",
}

export const addObj = (data: any) => {
  return request.post<any, any>(API.OBJECT_ADD_POST_URL, data);
};
export const postImgs = (data: any) => {
  return request.post<any, any>(API.IMAGE_ADD_POST_URL, data);
};
export const testAPI = () => {
  return request.get<any, any>(API.TEST_GET_URL);
};
export const testPostAPI = (data: any) => {
  return request.post<any, any>(API.TEST_POST_URL, data);
};

export const getCourseContents = (id: number) =>
  request.get<number, GetCourseContentResponse>(
    `${API.KNOWLEDGE_GET_URL}?id=${id}`
  );

export const getTipContents = (id: number) =>
  request.get<number, GetTipContentResponse>(`${API.TIP_GET_URL}?id=${id}`);

export const updateTipContents = (data: UpdateTipContent) =>
  request.post<UpdateTipContent, any>(API.TIP_UPDATE_POST_URL, data);

export const updateCourseContents = (data: UpdateCourseContent) =>
  request.post<UpdateCourseContent, any>(API.CONTENT_UPDATE_POST_URL, data);

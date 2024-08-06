/**
 * base
 */
interface ApiResponse<T> {
  success: boolean;
  data: T;
}

/**
 * 获取课程内容
 */
interface getCourseContent {
  content: string;
}
export type GetCourseContentResponse = ApiResponse<getCourseContent>;

/**
 * 获取知识弹窗内容
 */
interface getTipContent {
  title?: string;
  content?: string;
  judge?: boolean;
}
export type GetTipContentResponse = ApiResponse<getTipContent>;

/**
 * 更新知识弹窗是否显示
 */
export type UpdateTipContent = {
  id: number;
  title?: string;
  content?: string;
  judge?: boolean;
};

/**
 * 更新章节内容（标注/编辑）
 */
export type UpdateCourseContent = {
  id: number;
  content: string;
};

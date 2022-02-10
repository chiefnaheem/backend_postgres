import { Request, Response } from "express";
import ResponseStatus from "../utils/response";
import commentModel from "../model/comment";

const responseStatus = new ResponseStatus();

export const createComment = async (req: any, res: Response) => {
  try {
    const { user_id, tweet_id, content } = req.body;
    // const user_id = req.user.email.id
    const data = commentModel.createComment(user_id, tweet_id, content);
    responseStatus.setSuccess(201, "Successfully created a comment", { user_id, tweet_id, content });
    return responseStatus.send(res);
  } catch (error: any) {
    console.error(error.message);
    responseStatus.setError(500, `${error.message}`);
    return responseStatus.send(res);
  }
};
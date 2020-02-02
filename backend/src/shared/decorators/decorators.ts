import { createParamDecorator } from '@nestjs/common';
import { Response } from 'express';

export const ResGql = createParamDecorator(
  (data, [root, args, ctx, info]): Response => ctx.res
);

export const ReqGql = createParamDecorator(
  (data, [root, args, ctx, info]): Response => ctx.req
);

export const GqlUser = createParamDecorator(
  (data, [root, args, ctx, info]): any => ctx.req && ctx.req.user
);

/**
 * mock数据服务器模块，用于暴露mock接口，返回数据
 */
import Mock from 'mockjs';
import category from './category.json';
import homeData from './homeData.json';

Mock.mock('/home', {code: 0, data: homeData});
Mock.mock('/categorylist', {code: 0, data: category});

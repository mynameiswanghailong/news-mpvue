const environment = 'production';

// 淘新闻服务的域名池
const nePool = {
  development: 'http://test-xwz.coohua.top/',
  staging: 'http://172.16.11.190:9140/',
  production: 'https://xwz.chengyudashen.com/'
};

// 新闻服务的域名池
const infoPool = {
  development: 'http://test-info.coohua.top/',
  staging: 'http://172.16.11.189:9140/',
  production: 'https://info.chengyudashen.com/'
};

// 评论服务的域名池
const commentPool = {
  development: 'http://115.28.185.77:9090/',
  production: 'https://info.coohua.com/'
};

// 埋点平台的域名池
const remoteLog = {
  development: 'https://dcs.chengyudashen.com/data/v1?project=newsearn_test',
  staging: 'https://dcs.chengyudashen.com/data/v1?project=newsearn_test',
  production: 'https://dcs.chengyudashen.com/data/v1?project=newsearn'
};

// 健康知识汇的域名池
const health = {
  development: 'http://192.168.101.120:82/hkc-api',
  staging: 'https://test-hkc-api.coohua.top',
  production: 'https://hkc.chengyudashen.com'
};

const NE_HOST = nePool[environment];
const INFO_HOST = infoPool[environment];
const COMMENT_HOST = commentPool[environment];
const REMOTE_LOG = remoteLog[environment];
const HEATH_HOST = health[environment];

const hostConfig = {
  NE_HOST,
  INFO_HOST,
  COMMENT_HOST,
  REMOTE_LOG,
  HEATH_HOST
};

export default hostConfig;

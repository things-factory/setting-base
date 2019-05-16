export const SETTINGS = [
  {
    name: 'user.password.expire.enable',
    description: '비밀번호 만료 설정',
    category: 'common',
    value: 'true'
  },
  {
    name: 'file.root.path',
    description: 'File Storage Root Path',
    category: 'common',
    value: './storage'
  },
  {
    name: 'file.context.path',
    description: 'File Context Path',
    category: 'common',
    value: 'http://mes.hatiolab.com:8000/mes'
  },
  {
    name: 'security.all.permit.uri',
    description: '권한 체크를 하지 않을 URL 리스트',
    category: 'common',
    value:
      '/rest/stress,/rest/log_management,/rest/login,/rest/logout,/rest/terminologies/resource,/rest/users/register,/rest/users/request_init_pass,/rest/users/approval,/rest/users/reject,/rest/users/init_pass,/rest/users/active,/rest/users/request_active,/rest/domains/list,/rest/request_roles/reject,/rest/request_roles/approval,/rest/users/inactive,/rest/common_codes/show_by_name,/rest/seeds,/rest/download/public,/rest/request_auths/account/register/request,/rest/request_auths/password/reset/request,/rest/request_auths/account/activate/request,/rest/domains/current_domain,/rest/domain_apps'
  },
  {
    name: 'server.contrext.path',
    description: 'Server Context Path',
    category: 'common',
    value: 'http://boot.hatiolab.com'
  },
  {
    name: 'security.read.only.uri',
    description: '읽기 전용 URI 설정 (GET Method)',
    category: 'common',
    value: '/rest/fonts,/rest/download/public,/rest/publishers'
  },
  {
    name: 'client.context.path',
    description: '메일 전송시 화면에 접속하기 위한 URL Link를 위한 화면 접속 정보',
    category: 'common',
    value: 'http://boot.hatiolab.com'
  },
  {
    name: 'user.password.change.period.day',
    description: '비밀번호 변경 주기',
    category: 'common',
    value: '90'
  },
  {
    name: 'module.not.modifiable.list',
    description: '개발시 변경 되어서는 안되는 모듈 리스트',
    category: 'common',
    value: 'base'
  },
  {
    name: 'attach.file.delete',
    description: 'Attachment 삭제시 물리적 파일도 삭제 여부',
    category: 'common',
    value: 'true'
  },
  {
    name: 'security.use.random.init.pass',
    description: '패스워드 초기화시 랜덤 사용',
    category: 'common',
    value: 'true'
  },
  {
    name: 'error.print.stack.trace',
    description: '에러 발생시 Stack Trace를 프린트할 것인지 여부',
    category: 'common',
    value: 'true'
  },
  {
    name: 'upload.file.limit.size',
    description: '업로드 최대 사이즈 (MB)',
    category: 'common',
    value: '500'
  },
  {
    name: 'security.init.pass',
    description: '초기 패스워드 정보',
    category: 'common',
    value: 'elidom'
  },
  {
    name: 'notice.default.subject',
    description: '알림에서 Publish할 기본 채널',
    category: 'common',
    value: '/elidom/stomp/topic/notice'
  },
  {
    name: 'error.save.status.list',
    description:
      'DB에 저장하고자 하는 Error Status 목록.(ex : 500,401,403...) 값이 지정되어 있지 않으면, 모든 Status에 대하여 Log를 저장.',
    category: 'common',
    value: ''
  },
  {
    name: 'screen.pagination.page.limit',
    description: '그리드 페이지네이션을 위한 페이지 당 표시할 레코드 수 ',
    category: 'common',
    value: '50'
  },
  {
    name: 'error.unwritable.exception.types',
    description: 'Error Log를 저장하지 않을 Exception 설정',
    category: 'common',
    value: ''
  },
  {
    name: 'locale.default',
    description: '기본 로케일',
    category: 'common',
    value: 'ko-KR'
  }
]

function skillsMember(){
  return {
    restrict: 'E',
    templateUrl: 'app/views/templates/member/skills.html',
    controller: 'skillsMemberCtrl',
    controllerAs: 'skillsMemberCtrl',
    bindToController: true,
    scope: {
      member: '='
    }
  };
}
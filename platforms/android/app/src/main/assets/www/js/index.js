angular.module("app",['ionic'])
.controller("appCtr",function($scope,$ionicModal){
    $scope.tasks = [
        {title:"Ionic Bar :Header and Footer",id:1},
        {title:"Ionic Button",id:2},
        {title:"Ionic List",id:3},
        {title:"Ionic Card",id:4},
        {title:"Ionic Form",id:5},
        {title:"Ionic Toggle",id:6},
        {title:"Ionic Checkbox",id:7},
        {title:"Ionic Range",id:8},
        {title:"Ionic Select",id:9},
        {title:"Ionic Tab",id:10},
        {title:"Ionic Grid",id:11}
    ];

    $scope.menus =[
        {title:"首頁"},
        {title:"功能"},
        {title:"聯繫我們"}
    ];

      // 创建并载入模型
      $ionicModal.fromTemplateUrl('new_task.html',{
          scope: $scope,
          animation: 'slide-in-up'
      }).then(function(modal){
            $scope.taskModal = modal;
      });

      // 表单提交时调用
      $scope.createTask = function(task) {
        $scope.tasks.push({
          title: task.title
        });
        $scope.taskModal.hide();
        task.title = "";
      };

      // 打开新增的模型
      $scope.newTask = function() {
        console.log($scope.taskModal);

        $scope.taskModal.show();
      };

      // 关闭新增的模型
      $scope.closeNewTask = function() {
        $scope.taskModal.hide();
      };

      $scope.jumpTo = function(ids){
        switch(ids){
            case 1:
                window.location.href = "head_foot.html"
                break;
            case 2:
                window.location.href = "button.html"
                break;
            case 3:
                window.location.href = "list.html"
                break;
            case 4:
                window.location.href = "card.html"
                 break;
            case 5:
                window.location.href = "form.html"
                break;
            case 6:
                window.location.href = "toggle.html"
                break;
            case 7:
                window.location.href="checkbox.html"
                break;
            case 8:
                window.location.href="range.html"
                break;
            case 9:
                window.location.href="select.html"
                break;
            case 10:
                window.location.href="tab.html"
                break;
            case 11:
                window.location.href="grid.html"
                break;
        }
      }

});
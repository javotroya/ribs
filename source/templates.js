this["App"] = this["App"] || {};
this["App"]["Templates"] = this["App"]["Templates"] || {};

this["App"]["Templates"]["baseFooter"] = function(data) {
var __t, __p = '', __e = _.escape;
__p += '<div class="pull-right hidden-xs">\n    Anything you want\n</div>\n<!-- Default to the left -->\n<strong>Copyright &copy; 2016 <a href="#">Company</a>.</strong> All rights reserved.';
return __p
};

this["App"]["Templates"]["baseHeader"] = function(data) {
var __t, __p = '', __e = _.escape;
__p += '<!-- Logo -->\n<a href="index2.html" class="logo">\n    <!-- mini logo for sidebar mini 50x50 pixels -->\n    <span class="logo-mini"><b>A</b>LT</span>\n    <!-- logo for regular state and mobile devices -->\n    <span class="logo-lg"><b>Admin</b>LTE</span>\n</a>\n\n<!-- Header Navbar -->\n<nav class="navbar navbar-static-top" role="navigation">\n    <!-- Sidebar toggle button-->\n    <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">\n        <span class="sr-only">Toggle navigation</span>\n    </a>\n    <!-- Navbar Right Menu -->\n    <div class="navbar-custom-menu">\n        <ul class="nav navbar-nav">\n            <!-- Messages: style can be found in dropdown.less-->\n            <li class="dropdown messages-menu">\n                <!-- Menu toggle button -->\n                <a href="#" class="dropdown-toggle" data-toggle="dropdown">\n                    <i class="fa fa-envelope-o"></i>\n                    <span class="label label-success">4</span>\n                </a>\n                <ul class="dropdown-menu">\n                    <li class="header">You have 4 messages</li>\n                    <li>\n                        <!-- inner menu: contains the messages -->\n                        <ul class="menu">\n                            <li><!-- start message -->\n                                <a href="#">\n                                    <div class="pull-left">\n                                        <!-- User Image -->\n                                        <img src="img/users/1.png" class="img-circle" alt="User Image">\n                                    </div>\n                                    <!-- Message title and timestamp -->\n                                    <h4>\n                                        Support Team\n                                        <small><i class="fa fa-clock-o"></i> 5 mins</small>\n                                    </h4>\n                                    <!-- The message -->\n                                    <p>Why not buy a new awesome theme?</p>\n                                </a>\n                            </li>\n                            <!-- end message -->\n                        </ul>\n                        <!-- /.menu -->\n                    </li>\n                    <li class="footer"><a href="#">See All Messages</a></li>\n                </ul>\n            </li>\n            <!-- /.messages-menu -->\n\n            <!-- Notifications Menu -->\n            <li class="dropdown notifications-menu">\n                <!-- Menu toggle button -->\n                <a href="#" class="dropdown-toggle" data-toggle="dropdown">\n                    <i class="fa fa-bell-o"></i>\n                    <span class="label label-warning">10</span>\n                </a>\n                <ul class="dropdown-menu">\n                    <li class="header">You have 10 notifications</li>\n                    <li>\n                        <!-- Inner Menu: contains the notifications -->\n                        <ul class="menu">\n                            <li><!-- start notification -->\n                                <a href="#">\n                                    <i class="fa fa-users text-aqua"></i> 5 new members joined today\n                                </a>\n                            </li>\n                            <!-- end notification -->\n                        </ul>\n                    </li>\n                    <li class="footer"><a href="#">View all</a></li>\n                </ul>\n            </li>\n            <!-- Tasks Menu -->\n            <li class="dropdown tasks-menu">\n                <!-- Menu Toggle Button -->\n                <a href="#" class="dropdown-toggle" data-toggle="dropdown">\n                    <i class="fa fa-flag-o"></i>\n                    <span class="label label-danger">9</span>\n                </a>\n                <ul class="dropdown-menu">\n                    <li class="header">You have 9 tasks</li>\n                    <li>\n                        <!-- Inner menu: contains the tasks -->\n                        <ul class="menu">\n                            <li><!-- Task item -->\n                                <a href="#">\n                                    <!-- Task title and progress text -->\n                                    <h3>\n                                        Design some buttons\n                                        <small class="pull-right">20%</small>\n                                    </h3>\n                                    <!-- The progress bar -->\n                                    <div class="progress xs">\n                                        <!-- Change the css width attribute to simulate progress -->\n                                        <div class="progress-bar progress-bar-aqua" style="width: 20%" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">\n                                            <span class="sr-only">20% Complete</span>\n                                        </div>\n                                    </div>\n                                </a>\n                            </li>\n                            <!-- end task item -->\n                        </ul>\n                    </li>\n                    <li class="footer">\n                        <a href="#">View all tasks</a>\n                    </li>\n                </ul>\n            </li>\n            <!-- User Account Menu -->\n            <li class="dropdown user user-menu">\n                <!-- Menu Toggle Button -->\n                <a href="#" class="dropdown-toggle" data-toggle="dropdown">\n                    <!-- The user image in the navbar-->\n                    <img src="img/users/1.png" class="user-image" alt="User Image">\n                    <!-- hidden-xs hides the username on small devices so only the image appears. -->\n                    <span class="hidden-xs">Alexander Pierce</span>\n                </a>\n                <ul class="dropdown-menu">\n                    <!-- The user image in the menu -->\n                    <li class="user-header">\n                        <img src="img/users/1.png" class="img-circle" alt="User Image">\n\n                        <p>\n                            Alexander Pierce - Web Developer\n                            <small>Member since Nov. 2012</small>\n                        </p>\n                    </li>\n                    <!-- Menu Body -->\n                    <li class="user-body">\n                        <div class="row">\n                            <div class="col-xs-4 text-center">\n                                <a href="#">Followers</a>\n                            </div>\n                            <div class="col-xs-4 text-center">\n                                <a href="#">Sales</a>\n                            </div>\n                            <div class="col-xs-4 text-center">\n                                <a href="#">Friends</a>\n                            </div>\n                        </div>\n                        <!-- /.row -->\n                    </li>\n                    <!-- Menu Footer-->\n                    <li class="user-footer">\n                        <div class="pull-left">\n                            <a href="#" class="btn btn-default btn-flat">Profile</a>\n                        </div>\n                        <div class="pull-right">\n                            <a href="#" class="btn btn-default btn-flat">Sign out</a>\n                        </div>\n                    </li>\n                </ul>\n            </li>\n            <!-- Control Sidebar Toggle Button -->\n            <li>\n                <a href="#" data-toggle="control-sidebar"><i class="fa fa-gears"></i></a>\n            </li>\n        </ul>\n    </div>\n</nav>\n';
return __p
};

this["App"]["Templates"]["baseMainSidebar"] = function(data) {
var __t, __p = '', __e = _.escape;
__p += '<!-- Sidebar user panel (optional) -->\n<div class="user-panel">\n    <div class="pull-left image">\n        <img src="img/users/1.png" class="img-circle" alt="User Image">\n    </div>\n    <div class="pull-left info">\n        <p>Alexander Pierce</p>\n        <!-- Status -->\n        <a href="#"><i class="fa fa-circle text-success"></i> Online</a>\n    </div>\n</div>\n\n<!-- search form (Optional) -->\n<form action="#" method="get" class="sidebar-form">\n    <div class="input-group">\n        <input type="text" name="q" class="form-control" placeholder="Search...">\n        <span class="input-group-btn">\n                <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>\n                </button>\n              </span>\n    </div>\n</form>\n<!-- /.search form -->\n\n<!-- Sidebar Menu -->\n<ul class="sidebar-menu">\n    <li class="header">HEADER</li>\n    <!-- Optionally, you can add icons to the links -->\n    <li class="active"><a href="#"><i class="fa fa-link"></i> <span>Link</span></a></li>\n    <li><a href="#"><i class="fa fa-link"></i> <span>Another Link</span></a></li>\n    <li class="treeview">\n        <a href="#"><i class="fa fa-link"></i> <span>Multilevel</span>\n            <span class="pull-right-container">\n              <i class="fa fa-angle-left pull-right"></i>\n            </span>\n        </a>\n        <ul class="treeview-menu">\n            <li><a href="#">Link in level 2</a></li>\n            <li><a href="#">Link in level 2</a></li>\n        </ul>\n    </li>\n</ul>\n<!-- /.sidebar-menu -->';
return __p
};

this["App"]["Templates"]["baseSidebarControl"] = function(data) {
var __t, __p = '', __e = _.escape;
__p += '<ul class="nav nav-tabs nav-justified control-sidebar-tabs">\n    <li class="active"><a href="#control-sidebar-home-tab" data-toggle="tab"><i class="fa fa-home"></i></a></li>\n    <li><a href="#control-sidebar-settings-tab" data-toggle="tab"><i class="fa fa-gears"></i></a></li>\n</ul>\n<!-- Tab panes -->\n<div class="tab-content">\n    <!-- Home tab content -->\n    <div class="tab-pane active" id="control-sidebar-home-tab">\n        <h3 class="control-sidebar-heading">Recent Activity</h3>\n        <ul class="control-sidebar-menu">\n            <li>\n                <a href="javascript:;">\n                    <i class="menu-icon fa fa-birthday-cake bg-red"></i>\n\n                    <div class="menu-info">\n                        <h4 class="control-sidebar-subheading">Langdon\'s Birthday</h4>\n\n                        <p>Will be 23 on April 24th</p>\n                    </div>\n                </a>\n            </li>\n        </ul>\n        <!-- /.control-sidebar-menu -->\n\n        <h3 class="control-sidebar-heading">Tasks Progress</h3>\n        <ul class="control-sidebar-menu">\n            <li>\n                <a href="javascript:;">\n                    <h4 class="control-sidebar-subheading">\n                        Custom Template Design\n                        <span class="pull-right-container">\n                  <span class="label label-danger pull-right">70%</span>\n                </span>\n                    </h4>\n\n                    <div class="progress progress-xxs">\n                        <div class="progress-bar progress-bar-danger" style="width: 70%"></div>\n                    </div>\n                </a>\n            </li>\n        </ul>\n        <!-- /.control-sidebar-menu -->\n\n    </div>\n    <!-- /.tab-pane -->\n    <!-- Stats tab content -->\n    <div class="tab-pane" id="control-sidebar-stats-tab">Stats Tab Content</div>\n    <!-- /.tab-pane -->\n    <!-- Settings tab content -->\n    <div class="tab-pane" id="control-sidebar-settings-tab">\n        <form method="post">\n            <h3 class="control-sidebar-heading">General Settings</h3>\n\n            <div class="form-group">\n                <label class="control-sidebar-subheading">\n                    Report panel usage\n                    <input type="checkbox" class="pull-right" checked>\n                </label>\n\n                <p>\n                    Some information about this general settings option\n                </p>\n            </div>\n            <!-- /.form-group -->\n        </form>\n    </div>\n    <!-- /.tab-pane -->\n</div>\n';
return __p
};

this["App"]["Templates"]["testIndex"] = function(data) {
var __t, __p = '', __e = _.escape;
__p += '<section class="content-header">\n    <h1>\n        Page Header\n        <small>Optional description</small>\n    </h1>\n    <ol class="breadcrumb">\n        <li><a href="#"><i class="fa fa-dashboard"></i> Level</a></li>\n        <li class="active">Here</li>\n    </ol>\n</section>\n\n<!-- Main content -->\n<section class="content">\n\n    <!-- Your Page Content Here -->\n\n</section>\n';
return __p
};
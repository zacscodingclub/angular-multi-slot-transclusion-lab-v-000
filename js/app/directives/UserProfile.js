function UserProfile() {
	return {
		transclude: {
			name: 'h4',
			position: 'h6',
			description: 'p'
		},
		templateUrl: 'js/app/directives/profile.html'
	}
}

angular
	.module('app')
	.directive('userProfile', UserProfile);

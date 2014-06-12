/**
 * Copyright (C) 2014 Franck STAUFFER
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
(function ()
{
	"use strict";

	function Editor($http, REST, Utils, Dialog, i18n, NotificationCenter)
	{
		return {
			restrict: 'A',
			require: '^rbsDocumentEditorBase',

			link : function (scope, element, attrs, editorCtrl) {

				scope.cascadeCreate = editorCtrl.registerCreateCascade('items', 'Rbs_Highlight_Item');
				scope.cascadeEdit = editorCtrl.registerEditCascade('items');
			}
		};
	}

	Editor.$inject = ['$http', 'RbsChange.REST', 'RbsChange.Utils', 'RbsChange.Dialog', 'RbsChange.i18n', 'RbsChange.NotificationCenter'];
	angular.module('RbsChange').directive('rbsDocumentEditorRbsHighlightHighlightEdit', Editor);

})();

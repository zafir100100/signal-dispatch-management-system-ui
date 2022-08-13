(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (self["webpackChunksmart"] = self["webpackChunksmart"] || []).push([["src_app_extra-pages_extra-pages_module_ts"], {
    /***/
    97091:
    /*!**********************************************************************!*\
      !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/accordion.js ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CdkAccordion": function CdkAccordion() {
          return (
            /* binding */
            _CdkAccordion
          );
        },

        /* harmony export */
        "CdkAccordionItem": function CdkAccordionItem() {
          return (
            /* binding */
            _CdkAccordionItem
          );
        },

        /* harmony export */
        "CdkAccordionModule": function CdkAccordionModule() {
          return (
            /* binding */
            _CdkAccordionModule
          );
        },

        /* harmony export */
        "ɵangular_material_src_cdk_accordion_accordion_a": function ɵangular_material_src_cdk_accordion_accordion_a() {
          return (
            /* binding */
            CDK_ACCORDION
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/collections */
      38345);
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      39490);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      47762);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      46665);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Used to generate unique ID for each accordion. */


      var nextId$1 = 0;
      /**
       * Injection token that can be used to reference instances of `CdkAccordion`. It serves
       * as alternative token to the actual `CdkAccordion` class which could cause unnecessary
       * retention of the class and its directive metadata.
       */

      var CDK_ACCORDION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('CdkAccordion');
      /**
       * Directive whose purpose is to manage the expanded state of CdkAccordionItem children.
       */

      var _CdkAccordion = /*#__PURE__*/function () {
        function _CdkAccordion() {
          _classCallCheck(this, _CdkAccordion);

          /** Emits when the state of the accordion changes */
          this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
          /** Stream that emits true/false when openAll/closeAll is triggered. */

          this._openCloseAllActions = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
          /** A readonly id value to use for unique selection coordination. */

          this.id = "cdk-accordion-".concat(nextId$1++);
          this._multi = false;
        }
        /** Whether the accordion should allow multiple expanded accordion items simultaneously. */


        _createClass(_CdkAccordion, [{
          key: "multi",
          get: function get() {
            return this._multi;
          },
          set: function set(multi) {
            this._multi = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(multi);
          }
          /** Opens all enabled accordion items in an accordion where multi is enabled. */

        }, {
          key: "openAll",
          value: function openAll() {
            if (this._multi) {
              this._openCloseAllActions.next(true);
            }
          }
          /** Closes all enabled accordion items in an accordion where multi is enabled. */

        }, {
          key: "closeAll",
          value: function closeAll() {
            this._openCloseAllActions.next(false);
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            this._stateChanges.next(changes);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._stateChanges.complete();

            this._openCloseAllActions.complete();
          }
        }]);

        return _CdkAccordion;
      }();

      _CdkAccordion.ɵfac = function CdkAccordion_Factory(t) {
        return new (t || _CdkAccordion)();
      };

      _CdkAccordion.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _CdkAccordion,
        selectors: [["cdk-accordion"], ["", "cdkAccordion", ""]],
        inputs: {
          multi: "multi"
        },
        exportAs: ["cdkAccordion"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: CDK_ACCORDION,
          useExisting: _CdkAccordion
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });
      _CdkAccordion.propDecorators = {
        multi: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_CdkAccordion, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: 'cdk-accordion, [cdkAccordion]',
            exportAs: 'cdkAccordion',
            providers: [{
              provide: CDK_ACCORDION,
              useExisting: _CdkAccordion
            }]
          }]
        }], function () {
          return [];
        }, {
          multi: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Used to generate unique ID for each accordion item. */


      var nextId = 0;
      var ɵ0 = undefined;
      /**
       * An basic directive expected to be extended and decorated as a component.  Sets up all
       * events and attributes needed to be managed by a CdkAccordion parent.
       */

      var _CdkAccordionItem = /*#__PURE__*/function () {
        function _CdkAccordionItem(accordion, _changeDetectorRef, _expansionDispatcher) {
          var _this = this;

          _classCallCheck(this, _CdkAccordionItem);

          this.accordion = accordion;
          this._changeDetectorRef = _changeDetectorRef;
          this._expansionDispatcher = _expansionDispatcher;
          /** Subscription to openAll/closeAll events. */

          this._openCloseAllSubscription = rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription.EMPTY;
          /** Event emitted every time the AccordionItem is closed. */

          this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          /** Event emitted every time the AccordionItem is opened. */

          this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          /** Event emitted when the AccordionItem is destroyed. */

          this.destroyed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          /**
           * Emits whenever the expanded state of the accordion changes.
           * Primarily used to facilitate two-way binding.
           * @docs-private
           */

          this.expandedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          /** The unique AccordionItem id. */

          this.id = "cdk-accordion-child-".concat(nextId++);
          this._expanded = false;
          this._disabled = false;
          /** Unregister function for _expansionDispatcher. */

          this._removeUniqueSelectionListener = function () {};

          this._removeUniqueSelectionListener = _expansionDispatcher.listen(function (id, accordionId) {
            if (_this.accordion && !_this.accordion.multi && _this.accordion.id === accordionId && _this.id !== id) {
              _this.expanded = false;
            }
          }); // When an accordion item is hosted in an accordion, subscribe to open/close events.

          if (this.accordion) {
            this._openCloseAllSubscription = this._subscribeToOpenCloseAllActions();
          }
        }
        /** Whether the AccordionItem is expanded. */


        _createClass(_CdkAccordionItem, [{
          key: "expanded",
          get: function get() {
            return this._expanded;
          },
          set: function set(expanded) {
            expanded = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(expanded); // Only emit events and update the internal value if the value changes.

            if (this._expanded !== expanded) {
              this._expanded = expanded;
              this.expandedChange.emit(expanded);

              if (expanded) {
                this.opened.emit();
                /**
                 * In the unique selection dispatcher, the id parameter is the id of the CdkAccordionItem,
                 * the name value is the id of the accordion.
                 */

                var accordionId = this.accordion ? this.accordion.id : this.id;

                this._expansionDispatcher.notify(this.id, accordionId);
              } else {
                this.closed.emit();
              } // Ensures that the animation will run when the value is set outside of an `@Input`.
              // This includes cases like the open, close and toggle methods.


              this._changeDetectorRef.markForCheck();
            }
          }
          /** Whether the AccordionItem is disabled. */

        }, {
          key: "disabled",
          get: function get() {
            return this._disabled;
          },
          set: function set(disabled) {
            this._disabled = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(disabled);
          }
          /** Emits an event for the accordion item being destroyed. */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.opened.complete();
            this.closed.complete();
            this.destroyed.emit();
            this.destroyed.complete();

            this._removeUniqueSelectionListener();

            this._openCloseAllSubscription.unsubscribe();
          }
          /** Toggles the expanded state of the accordion item. */

        }, {
          key: "toggle",
          value: function toggle() {
            if (!this.disabled) {
              this.expanded = !this.expanded;
            }
          }
          /** Sets the expanded state of the accordion item to false. */

        }, {
          key: "close",
          value: function close() {
            if (!this.disabled) {
              this.expanded = false;
            }
          }
          /** Sets the expanded state of the accordion item to true. */

        }, {
          key: "open",
          value: function open() {
            if (!this.disabled) {
              this.expanded = true;
            }
          }
        }, {
          key: "_subscribeToOpenCloseAllActions",
          value: function _subscribeToOpenCloseAllActions() {
            var _this2 = this;

            return this.accordion._openCloseAllActions.subscribe(function (expanded) {
              // Only change expanded state if item is enabled
              if (!_this2.disabled) {
                _this2.expanded = expanded;
              }
            });
          }
        }]);

        return _CdkAccordionItem;
      }();

      _CdkAccordionItem.ɵfac = function CdkAccordionItem_Factory(t) {
        return new (t || _CdkAccordionItem)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CDK_ACCORDION, 12), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__.UniqueSelectionDispatcher));
      };

      _CdkAccordionItem.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _CdkAccordionItem,
        selectors: [["cdk-accordion-item"], ["", "cdkAccordionItem", ""]],
        inputs: {
          expanded: "expanded",
          disabled: "disabled"
        },
        outputs: {
          closed: "closed",
          opened: "opened",
          destroyed: "destroyed",
          expandedChange: "expandedChange"
        },
        exportAs: ["cdkAccordionItem"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([// Provide `CDK_ACCORDION` as undefined to prevent nested accordion items from
        // registering to the same accordion.
        {
          provide: CDK_ACCORDION,
          useValue: ɵ0
        }])]
      });

      _CdkAccordionItem.ctorParameters = function () {
        return [{
          type: _CdkAccordion,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [CDK_ACCORDION]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
        }, {
          type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__.UniqueSelectionDispatcher
        }];
      };

      _CdkAccordionItem.propDecorators = {
        closed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        opened: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        destroyed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        expandedChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        expanded: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_CdkAccordionItem, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: 'cdk-accordion-item, [cdkAccordionItem]',
            exportAs: 'cdkAccordionItem',
            providers: [// Provide `CDK_ACCORDION` as undefined to prevent nested accordion items from
            // registering to the same accordion.
            {
              provide: CDK_ACCORDION,
              useValue: ɵ0
            }]
          }]
        }], function () {
          return [{
            type: _CdkAccordion,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [CDK_ACCORDION]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
          }, {
            type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__.UniqueSelectionDispatcher
          }];
        }, {
          closed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          opened: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          destroyed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          expandedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          expanded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var _CdkAccordionModule = /*#__PURE__*/_createClass(function _CdkAccordionModule() {
        _classCallCheck(this, _CdkAccordionModule);
      });

      _CdkAccordionModule.ɵfac = function CdkAccordionModule_Factory(t) {
        return new (t || _CdkAccordionModule)();
      };

      _CdkAccordionModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _CdkAccordionModule
      });
      _CdkAccordionModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_CdkAccordionModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
          args: [{
            exports: [_CdkAccordion, _CdkAccordionItem],
            declarations: [_CdkAccordion, _CdkAccordionItem]
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_CdkAccordionModule, {
          declarations: [_CdkAccordion, _CdkAccordionItem],
          exports: [_CdkAccordion, _CdkAccordionItem]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=accordion.js.map

      /***/

    },

    /***/
    1562:
    /*!***************************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EXPANSION_PANEL_ANIMATION_TIMING": function EXPANSION_PANEL_ANIMATION_TIMING() {
          return (
            /* binding */
            _EXPANSION_PANEL_ANIMATION_TIMING
          );
        },

        /* harmony export */
        "MAT_ACCORDION": function MAT_ACCORDION() {
          return (
            /* binding */
            _MAT_ACCORDION
          );
        },

        /* harmony export */
        "MAT_EXPANSION_PANEL_DEFAULT_OPTIONS": function MAT_EXPANSION_PANEL_DEFAULT_OPTIONS() {
          return (
            /* binding */
            _MAT_EXPANSION_PANEL_DEFAULT_OPTIONS
          );
        },

        /* harmony export */
        "MatAccordion": function MatAccordion() {
          return (
            /* binding */
            _MatAccordion
          );
        },

        /* harmony export */
        "MatExpansionModule": function MatExpansionModule() {
          return (
            /* binding */
            _MatExpansionModule
          );
        },

        /* harmony export */
        "MatExpansionPanel": function MatExpansionPanel() {
          return (
            /* binding */
            _MatExpansionPanel
          );
        },

        /* harmony export */
        "MatExpansionPanelActionRow": function MatExpansionPanelActionRow() {
          return (
            /* binding */
            _MatExpansionPanelActionRow
          );
        },

        /* harmony export */
        "MatExpansionPanelContent": function MatExpansionPanelContent() {
          return (
            /* binding */
            _MatExpansionPanelContent
          );
        },

        /* harmony export */
        "MatExpansionPanelDescription": function MatExpansionPanelDescription() {
          return (
            /* binding */
            _MatExpansionPanelDescription
          );
        },

        /* harmony export */
        "MatExpansionPanelHeader": function MatExpansionPanelHeader() {
          return (
            /* binding */
            _MatExpansionPanelHeader
          );
        },

        /* harmony export */
        "MatExpansionPanelTitle": function MatExpansionPanelTitle() {
          return (
            /* binding */
            _MatExpansionPanelTitle
          );
        },

        /* harmony export */
        "matExpansionAnimations": function matExpansionAnimations() {
          return (
            /* binding */
            _matExpansionAnimations
          );
        },

        /* harmony export */
        "ɵ0": function ɵ0() {
          return (
            /* binding */
            _ɵ
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/accordion */
      97091);
      /* harmony import */


      var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/cdk/portal */
      87636);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/core */
      5015);
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      39490);
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      19238);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      42687);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      69978);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      34689);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      74294);
      /* harmony import */


      var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/cdk/keycodes */
      36461);
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      75835);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      47762);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! rxjs */
      46665);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! rxjs */
      66149);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! rxjs */
      33763);
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/animations */
      17238);
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/cdk/collections */
      38345);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Token used to provide a `MatAccordion` to `MatExpansionPanel`.
       * Used primarily to avoid circular imports between `MatAccordion` and `MatExpansionPanel`.
       */


      var _c0 = ["body"];

      function MatExpansionPanel_ng_template_5_Template(rf, ctx) {}

      var _c1 = [[["mat-expansion-panel-header"]], "*", [["mat-action-row"]]];
      var _c2 = ["mat-expansion-panel-header", "*", "mat-action-row"];

      function MatExpansionPanelHeader_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 2);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@indicatorRotate", ctx_r0._getExpandedState());
        }
      }

      var _c3 = [[["mat-panel-title"]], [["mat-panel-description"]], "*"];
      var _c4 = ["mat-panel-title", "mat-panel-description", "*"];

      var _MAT_ACCORDION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_ACCORDION');
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Time and timing curve for expansion panel animations. */
      // Note: Keep this in sync with the Sass variable for the panel header animation.


      var _EXPANSION_PANEL_ANIMATION_TIMING = '225ms cubic-bezier(0.4,0.0,0.2,1)';
      /**
       * Animations used by the Material expansion panel.
       *
       * A bug in angular animation's `state` when ViewContainers are moved using ViewContainerRef.move()
       * causes the animation state of moved components to become `void` upon exit, and not update again
       * upon reentry into the DOM.  This can lead a to situation for the expansion panel where the state
       * of the panel is `expanded` or `collapsed` but the animation state is `void`.
       *
       * To correctly handle animating to the next state, we animate between `void` and `collapsed` which
       * are defined to have the same styles. Since angular animates from the current styles to the
       * destination state's style definition, in situations where we are moving from `void`'s styles to
       * `collapsed` this acts a noop since no style values change.
       *
       * In the case where angular's animation state is out of sync with the expansion panel's state, the
       * expansion panel being `expanded` and angular animations being `void`, the animation from the
       * `expanded`'s effective styles (though in a `void` animation state) to the collapsed state will
       * occur as expected.
       *
       * Angular Bug: https://github.com/angular/angular/issues/18847
       *
       * @docs-private
       */

      var _matExpansionAnimations = {
        /** Animation that rotates the indicator arrow. */
        indicatorRotate: (0, _angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)('indicatorRotate', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('collapsed, void', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
          transform: 'rotate(0deg)'
        })), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('expanded', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
          transform: 'rotate(180deg)'
        })), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('expanded <=> collapsed, void => collapsed', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)(_EXPANSION_PANEL_ANIMATION_TIMING))]),

        /** Animation that expands and collapses the panel content. */
        bodyExpansion: (0, _angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)('bodyExpansion', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('collapsed, void', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
          height: '0px',
          visibility: 'hidden'
        })), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('expanded', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
          height: '*',
          visibility: 'visible'
        })), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('expanded <=> collapsed, void => collapsed', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)(_EXPANSION_PANEL_ANIMATION_TIMING))])
      };
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Expansion panel content that will be rendered lazily
       * after the panel is opened for the first time.
       */

      var _MatExpansionPanelContent = /*#__PURE__*/_createClass(function _MatExpansionPanelContent(_template) {
        _classCallCheck(this, _MatExpansionPanelContent);

        this._template = _template;
      });

      _MatExpansionPanelContent.ɵfac = function MatExpansionPanelContent_Factory(t) {
        return new (t || _MatExpansionPanelContent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
      };

      _MatExpansionPanelContent.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _MatExpansionPanelContent,
        selectors: [["ng-template", "matExpansionPanelContent", ""]]
      });

      _MatExpansionPanelContent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatExpansionPanelContent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: 'ng-template[matExpansionPanelContent]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Counter for generating unique element ids. */


      var uniqueId = 0;
      /**
       * Injection token that can be used to configure the default
       * options for the expansion panel component.
       */

      var _MAT_EXPANSION_PANEL_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_EXPANSION_PANEL_DEFAULT_OPTIONS');

      var _ɵ = undefined;
      /**
       * This component can be used as a single element to show expandable content, or as one of
       * multiple children of an element with the MatAccordion directive attached.
       */

      var _MatExpansionPanel = /*#__PURE__*/function (_angular_cdk_accordio) {
        _inherits(_MatExpansionPanel, _angular_cdk_accordio);

        var _super = _createSuper(_MatExpansionPanel);

        function _MatExpansionPanel(accordion, _changeDetectorRef, _uniqueSelectionDispatcher, _viewContainerRef, _document, _animationMode, defaultOptions) {
          var _this3;

          _classCallCheck(this, _MatExpansionPanel);

          _this3 = _super.call(this, accordion, _changeDetectorRef, _uniqueSelectionDispatcher);
          _this3._viewContainerRef = _viewContainerRef;
          _this3._animationMode = _animationMode;
          _this3._hideToggle = false;
          /** An event emitted after the body's expansion animation happens. */

          _this3.afterExpand = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          /** An event emitted after the body's collapse animation happens. */

          _this3.afterCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          /** Stream that emits for changes in `@Input` properties. */

          _this3._inputChanges = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
          /** ID for the associated header element. Used for a11y labelling. */

          _this3._headerId = "mat-expansion-panel-header-".concat(uniqueId++);
          /** Stream of body animation done events. */

          _this3._bodyAnimationDone = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
          _this3.accordion = accordion;
          _this3._document = _document; // We need a Subject with distinctUntilChanged, because the `done` event
          // fires twice on some browsers. See https://github.com/angular/angular/issues/24084

          _this3._bodyAnimationDone.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.distinctUntilChanged)(function (x, y) {
            return x.fromState === y.fromState && x.toState === y.toState;
          })).subscribe(function (event) {
            if (event.fromState !== 'void') {
              if (event.toState === 'expanded') {
                _this3.afterExpand.emit();
              } else if (event.toState === 'collapsed') {
                _this3.afterCollapse.emit();
              }
            }
          });

          if (defaultOptions) {
            _this3.hideToggle = defaultOptions.hideToggle;
          }

          return _this3;
        }
        /** Whether the toggle indicator should be hidden. */


        _createClass(_MatExpansionPanel, [{
          key: "hideToggle",
          get: function get() {
            return this._hideToggle || this.accordion && this.accordion.hideToggle;
          },
          set: function set(value) {
            this._hideToggle = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__.coerceBooleanProperty)(value);
          }
          /** The position of the expansion indicator. */

        }, {
          key: "togglePosition",
          get: function get() {
            return this._togglePosition || this.accordion && this.accordion.togglePosition;
          },
          set: function set(value) {
            this._togglePosition = value;
          }
          /** Determines whether the expansion panel should have spacing between it and its siblings. */

        }, {
          key: "_hasSpacing",
          value: function _hasSpacing() {
            if (this.accordion) {
              return this.expanded && this.accordion.displayMode === 'default';
            }

            return false;
          }
          /** Gets the expanded state string. */

        }, {
          key: "_getExpandedState",
          value: function _getExpandedState() {
            return this.expanded ? 'expanded' : 'collapsed';
          }
          /** Toggles the expanded state of the expansion panel. */

        }, {
          key: "toggle",
          value: function toggle() {
            this.expanded = !this.expanded;
          }
          /** Sets the expanded state of the expansion panel to false. */

        }, {
          key: "close",
          value: function close() {
            this.expanded = false;
          }
          /** Sets the expanded state of the expansion panel to true. */

        }, {
          key: "open",
          value: function open() {
            this.expanded = true;
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this4 = this;

            if (this._lazyContent) {
              // Render the content as soon as the panel becomes open.
              this.opened.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.startWith)(null), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(function () {
                return _this4.expanded && !_this4._portal;
              }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1)).subscribe(function () {
                _this4._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__.TemplatePortal(_this4._lazyContent._template, _this4._viewContainerRef);
              });
            }
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            this._inputChanges.next(changes);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            _get(_getPrototypeOf(_MatExpansionPanel.prototype), "ngOnDestroy", this).call(this);

            this._bodyAnimationDone.complete();

            this._inputChanges.complete();
          }
          /** Checks whether the expansion panel's content contains the currently-focused element. */

        }, {
          key: "_containsFocus",
          value: function _containsFocus() {
            if (this._body) {
              var focusedElement = this._document.activeElement;
              var bodyElement = this._body.nativeElement;
              return focusedElement === bodyElement || bodyElement.contains(focusedElement);
            }

            return false;
          }
        }]);

        return _MatExpansionPanel;
      }(_angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_2__.CdkAccordionItem);

      _MatExpansionPanel.ɵfac = function MatExpansionPanel_Factory(t) {
        return new (t || _MatExpansionPanel)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_MAT_ACCORDION, 12), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_10__.UniqueSelectionDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.ANIMATION_MODULE_TYPE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_MAT_EXPANSION_PANEL_DEFAULT_OPTIONS, 8));
      };

      _MatExpansionPanel.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _MatExpansionPanel,
        selectors: [["mat-expansion-panel"]],
        contentQueries: function MatExpansionPanel_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _MatExpansionPanelContent, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._lazyContent = _t.first);
          }
        },
        viewQuery: function MatExpansionPanel_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._body = _t.first);
          }
        },
        hostAttrs: [1, "mat-expansion-panel"],
        hostVars: 6,
        hostBindings: function MatExpansionPanel_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-expanded", ctx.expanded)("_mat-animation-noopable", ctx._animationMode === "NoopAnimations")("mat-expansion-panel-spacing", ctx._hasSpacing());
          }
        },
        inputs: {
          disabled: "disabled",
          expanded: "expanded",
          hideToggle: "hideToggle",
          togglePosition: "togglePosition"
        },
        outputs: {
          opened: "opened",
          closed: "closed",
          expandedChange: "expandedChange",
          afterExpand: "afterExpand",
          afterCollapse: "afterCollapse"
        },
        exportAs: ["matExpansionPanel"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([// Provide MatAccordion as undefined to prevent nested expansion panels from registering
        // to the same accordion.
        {
          provide: _MAT_ACCORDION,
          useValue: _ɵ
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        ngContentSelectors: _c2,
        decls: 7,
        vars: 4,
        consts: [["role", "region", 1, "mat-expansion-panel-content", 3, "id"], ["body", ""], [1, "mat-expansion-panel-body"], [3, "cdkPortalOutlet"]],
        template: function MatExpansionPanel_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@bodyExpansion.done", function MatExpansionPanel_Template_div_animation_bodyExpansion_done_1_listener($event) {
              return ctx._bodyAnimationDone.next($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MatExpansionPanel_ng_template_5_Template, 0, 0, "ng-template", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](6, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@bodyExpansion", ctx._getExpandedState())("id", ctx.id);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-labelledby", ctx._headerId);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkPortalOutlet", ctx._portal);
          }
        },
        directives: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__.CdkPortalOutlet],
        styles: [".mat-expansion-panel{box-sizing:content-box;display:block;margin:0;border-radius:4px;overflow:hidden;transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);position:relative}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:4px;border-top-left-radius:4px}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.cdk-high-contrast-active .mat-expansion-panel{outline:solid 1px}.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel,.mat-expansion-panel._mat-animation-noopable{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px}.mat-action-row button.mat-button-base,.mat-action-row button.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row button.mat-button-base,[dir=rtl] .mat-action-row button.mat-mdc-button-base{margin-left:0;margin-right:8px}\n"],
        encapsulation: 2,
        data: {
          animation: [_matExpansionAnimations.bodyExpansion]
        },
        changeDetection: 0
      });

      _MatExpansionPanel.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_MAT_ACCORDION]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
        }, {
          type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_10__.UniqueSelectionDispatcher
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.ANIMATION_MODULE_TYPE]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_MAT_EXPANSION_PANEL_DEFAULT_OPTIONS]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }]
        }];
      };

      _MatExpansionPanel.propDecorators = {
        hideToggle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        togglePosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        afterExpand: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        afterCollapse: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        _lazyContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
          args: [_MatExpansionPanelContent]
        }],
        _body: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
          args: ['body']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatExpansionPanel, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'mat-expansion-panel',
            exportAs: 'matExpansionPanel',
            template: "<ng-content select=\"mat-expansion-panel-header\"></ng-content>\n<div class=\"mat-expansion-panel-content\"\n     role=\"region\"\n     [@bodyExpansion]=\"_getExpandedState()\"\n     (@bodyExpansion.done)=\"_bodyAnimationDone.next($event)\"\n     [attr.aria-labelledby]=\"_headerId\"\n     [id]=\"id\"\n     #body>\n  <div class=\"mat-expansion-panel-body\">\n    <ng-content></ng-content>\n    <ng-template [cdkPortalOutlet]=\"_portal\"></ng-template>\n  </div>\n  <ng-content select=\"mat-action-row\"></ng-content>\n</div>\n",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
            inputs: ['disabled', 'expanded'],
            outputs: ['opened', 'closed', 'expandedChange'],
            animations: [_matExpansionAnimations.bodyExpansion],
            providers: [// Provide MatAccordion as undefined to prevent nested expansion panels from registering
            // to the same accordion.
            {
              provide: _MAT_ACCORDION,
              useValue: _ɵ
            }],
            host: {
              'class': 'mat-expansion-panel',
              '[class.mat-expanded]': 'expanded',
              '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
              '[class.mat-expansion-panel-spacing]': '_hasSpacing()'
            },
            styles: [".mat-expansion-panel{box-sizing:content-box;display:block;margin:0;border-radius:4px;overflow:hidden;transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);position:relative}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:4px;border-top-left-radius:4px}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.cdk-high-contrast-active .mat-expansion-panel{outline:solid 1px}.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel,.mat-expansion-panel._mat-animation-noopable{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px}.mat-action-row button.mat-button-base,.mat-action-row button.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row button.mat-button-base,[dir=rtl] .mat-action-row button.mat-mdc-button-base{margin-left:0;margin-right:8px}\n"]
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_MAT_ACCORDION]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
          }, {
            type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_10__.UniqueSelectionDispatcher
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.ANIMATION_MODULE_TYPE]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_MAT_EXPANSION_PANEL_DEFAULT_OPTIONS]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }]
          }];
        }, {
          afterExpand: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          afterCollapse: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          hideToggle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          togglePosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          _lazyContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [_MatExpansionPanelContent]
          }],
          _body: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['body']
          }]
        });
      })();
      /**
       * Actions of a `<mat-expansion-panel>`.
       */


      var _MatExpansionPanelActionRow = /*#__PURE__*/_createClass(function _MatExpansionPanelActionRow() {
        _classCallCheck(this, _MatExpansionPanelActionRow);
      });

      _MatExpansionPanelActionRow.ɵfac = function MatExpansionPanelActionRow_Factory(t) {
        return new (t || _MatExpansionPanelActionRow)();
      };

      _MatExpansionPanelActionRow.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _MatExpansionPanelActionRow,
        selectors: [["mat-action-row"]],
        hostAttrs: [1, "mat-action-row"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatExpansionPanelActionRow, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: 'mat-action-row',
            host: {
              "class": 'mat-action-row'
            }
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // Boilerplate for applying mixins to MatExpansionPanelHeader.

      /** @docs-private */


      var MatExpansionPanelHeaderBase = /*#__PURE__*/_createClass(function MatExpansionPanelHeaderBase() {
        _classCallCheck(this, MatExpansionPanelHeaderBase);
      });

      var _MatExpansionPanelHeaderMixinBase = (0, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.mixinTabIndex)(MatExpansionPanelHeaderBase);
      /**
       * Header element of a `<mat-expansion-panel>`.
       */


      var _MatExpansionPanelHeader = /*#__PURE__*/function (_MatExpansionPanelHea) {
        _inherits(_MatExpansionPanelHeader, _MatExpansionPanelHea);

        var _super2 = _createSuper(_MatExpansionPanelHeader);

        function _MatExpansionPanelHeader(panel, _element, _focusMonitor, _changeDetectorRef, defaultOptions, _animationMode, tabIndex) {
          var _this5;

          _classCallCheck(this, _MatExpansionPanelHeader);

          _this5 = _super2.call(this);
          _this5.panel = panel;
          _this5._element = _element;
          _this5._focusMonitor = _focusMonitor;
          _this5._changeDetectorRef = _changeDetectorRef;
          _this5._animationMode = _animationMode;
          _this5._parentChangeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_14__.Subscription.EMPTY;
          var accordionHideToggleChange = panel.accordion ? panel.accordion._stateChanges.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(function (changes) {
            return !!(changes['hideToggle'] || changes['togglePosition']);
          })) : rxjs__WEBPACK_IMPORTED_MODULE_15__.EMPTY;
          _this5.tabIndex = parseInt(tabIndex || '') || 0; // Since the toggle state depends on an @Input on the panel, we
          // need to subscribe and trigger change detection manually.

          _this5._parentChangeSubscription = (0, rxjs__WEBPACK_IMPORTED_MODULE_16__.merge)(panel.opened, panel.closed, accordionHideToggleChange, panel._inputChanges.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(function (changes) {
            return !!(changes['hideToggle'] || changes['disabled'] || changes['togglePosition']);
          }))).subscribe(function () {
            return _this5._changeDetectorRef.markForCheck();
          }); // Avoids focus being lost if the panel contained the focused element and was closed.

          panel.closed.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(function () {
            return panel._containsFocus();
          })).subscribe(function () {
            return _focusMonitor.focusVia(_element, 'program');
          });

          if (defaultOptions) {
            _this5.expandedHeight = defaultOptions.expandedHeight;
            _this5.collapsedHeight = defaultOptions.collapsedHeight;
          }

          return _this5;
        }
        /**
         * Whether the associated panel is disabled. Implemented as a part of `FocusableOption`.
         * @docs-private
         */


        _createClass(_MatExpansionPanelHeader, [{
          key: "disabled",
          get: function get() {
            return this.panel.disabled;
          }
          /** Toggles the expanded state of the panel. */

        }, {
          key: "_toggle",
          value: function _toggle() {
            if (!this.disabled) {
              this.panel.toggle();
            }
          }
          /** Gets whether the panel is expanded. */

        }, {
          key: "_isExpanded",
          value: function _isExpanded() {
            return this.panel.expanded;
          }
          /** Gets the expanded state string of the panel. */

        }, {
          key: "_getExpandedState",
          value: function _getExpandedState() {
            return this.panel._getExpandedState();
          }
          /** Gets the panel id. */

        }, {
          key: "_getPanelId",
          value: function _getPanelId() {
            return this.panel.id;
          }
          /** Gets the toggle position for the header. */

        }, {
          key: "_getTogglePosition",
          value: function _getTogglePosition() {
            return this.panel.togglePosition;
          }
          /** Gets whether the expand indicator should be shown. */

        }, {
          key: "_showToggle",
          value: function _showToggle() {
            return !this.panel.hideToggle && !this.panel.disabled;
          }
          /**
           * Gets the current height of the header. Null if no custom height has been
           * specified, and if the default height from the stylesheet should be used.
           */

        }, {
          key: "_getHeaderHeight",
          value: function _getHeaderHeight() {
            var isExpanded = this._isExpanded();

            if (isExpanded && this.expandedHeight) {
              return this.expandedHeight;
            } else if (!isExpanded && this.collapsedHeight) {
              return this.collapsedHeight;
            }

            return null;
          }
          /** Handle keydown event calling to toggle() if appropriate. */

        }, {
          key: "_keydown",
          value: function _keydown(event) {
            switch (event.keyCode) {
              // Toggle for space and enter keys.
              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__.SPACE:
              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__.ENTER:
                if (!(0, _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__.hasModifierKey)(event)) {
                  event.preventDefault();

                  this._toggle();
                }

                break;

              default:
                if (this.panel.accordion) {
                  this.panel.accordion._handleHeaderKeydown(event);
                }

                return;
            }
          }
          /**
           * Focuses the panel header. Implemented as a part of `FocusableOption`.
           * @param origin Origin of the action that triggered the focus.
           * @docs-private
           */

        }, {
          key: "focus",
          value: function focus(origin, options) {
            if (origin) {
              this._focusMonitor.focusVia(this._element, origin, options);
            } else {
              this._element.nativeElement.focus(options);
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this6 = this;

            this._focusMonitor.monitor(this._element).subscribe(function (origin) {
              if (origin && _this6.panel.accordion) {
                _this6.panel.accordion._handleHeaderFocus(_this6);
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._parentChangeSubscription.unsubscribe();

            this._focusMonitor.stopMonitoring(this._element);
          }
        }]);

        return _MatExpansionPanelHeader;
      }(_MatExpansionPanelHeaderMixinBase);

      _MatExpansionPanelHeader.ɵfac = function MatExpansionPanelHeader_Factory(t) {
        return new (t || _MatExpansionPanelHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_MatExpansionPanel, 1), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_18__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_MAT_EXPANSION_PANEL_DEFAULT_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.ANIMATION_MODULE_TYPE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('tabindex'));
      };

      _MatExpansionPanelHeader.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _MatExpansionPanelHeader,
        selectors: [["mat-expansion-panel-header"]],
        hostAttrs: ["role", "button", 1, "mat-expansion-panel-header", "mat-focus-indicator"],
        hostVars: 15,
        hostBindings: function MatExpansionPanelHeader_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatExpansionPanelHeader_click_HostBindingHandler() {
              return ctx._toggle();
            })("keydown", function MatExpansionPanelHeader_keydown_HostBindingHandler($event) {
              return ctx._keydown($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.panel._headerId)("tabindex", ctx.tabIndex)("aria-controls", ctx._getPanelId())("aria-expanded", ctx._isExpanded())("aria-disabled", ctx.panel.disabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx._getHeaderHeight());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-expanded", ctx._isExpanded())("mat-expansion-toggle-indicator-after", ctx._getTogglePosition() === "after")("mat-expansion-toggle-indicator-before", ctx._getTogglePosition() === "before")("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
          }
        },
        inputs: {
          tabIndex: "tabIndex",
          expandedHeight: "expandedHeight",
          collapsedHeight: "collapsedHeight"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c4,
        decls: 5,
        vars: 1,
        consts: [[1, "mat-content"], ["class", "mat-expansion-indicator", 4, "ngIf"], [1, "mat-expansion-indicator"]],
        template: function MatExpansionPanelHeader_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MatExpansionPanelHeader_span_4_Template, 1, 1, "span", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._showToggle());
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf],
        styles: [".mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;margin-right:16px}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header-description{flex-grow:2}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:\"\";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle}.cdk-high-contrast-active .mat-expansion-panel .mat-expansion-panel-header.cdk-keyboard-focused:not([aria-disabled=true])::before,.cdk-high-contrast-active .mat-expansion-panel .mat-expansion-panel-header.cdk-program-focused:not([aria-disabled=true])::before,.cdk-high-contrast-active .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:hover:not([aria-disabled=true])::before{top:0;left:0;right:0;bottom:0;position:absolute;box-sizing:border-box;pointer-events:none;border:3px solid;border-radius:4px;content:\"\"}.cdk-high-contrast-active .mat-expansion-panel-content{border-top:1px solid;border-top-left-radius:0;border-top-right-radius:0}\n"],
        encapsulation: 2,
        data: {
          animation: [_matExpansionAnimations.indicatorRotate]
        },
        changeDetection: 0
      });

      _MatExpansionPanelHeader.ctorParameters = function () {
        return [{
          type: _MatExpansionPanel,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_18__.FocusMonitor
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_MAT_EXPANSION_PANEL_DEFAULT_OPTIONS]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.ANIMATION_MODULE_TYPE]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
            args: ['tabindex']
          }]
        }];
      };

      _MatExpansionPanelHeader.propDecorators = {
        expandedHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        collapsedHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatExpansionPanelHeader, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'mat-expansion-panel-header',
            template: "<span class=\"mat-content\">\n  <ng-content select=\"mat-panel-title\"></ng-content>\n  <ng-content select=\"mat-panel-description\"></ng-content>\n  <ng-content></ng-content>\n</span>\n<span [@indicatorRotate]=\"_getExpandedState()\" *ngIf=\"_showToggle()\"\n      class=\"mat-expansion-indicator\"></span>\n",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
            inputs: ['tabIndex'],
            animations: [_matExpansionAnimations.indicatorRotate],
            host: {
              'class': 'mat-expansion-panel-header mat-focus-indicator',
              'role': 'button',
              '[attr.id]': 'panel._headerId',
              '[attr.tabindex]': 'tabIndex',
              '[attr.aria-controls]': '_getPanelId()',
              '[attr.aria-expanded]': '_isExpanded()',
              '[attr.aria-disabled]': 'panel.disabled',
              '[class.mat-expanded]': '_isExpanded()',
              '[class.mat-expansion-toggle-indicator-after]': "_getTogglePosition() === 'after'",
              '[class.mat-expansion-toggle-indicator-before]': "_getTogglePosition() === 'before'",
              '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
              '[style.height]': '_getHeaderHeight()',
              '(click)': '_toggle()',
              '(keydown)': '_keydown($event)'
            },
            styles: [".mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;margin-right:16px}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header-description{flex-grow:2}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:\"\";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle}.cdk-high-contrast-active .mat-expansion-panel .mat-expansion-panel-header.cdk-keyboard-focused:not([aria-disabled=true])::before,.cdk-high-contrast-active .mat-expansion-panel .mat-expansion-panel-header.cdk-program-focused:not([aria-disabled=true])::before,.cdk-high-contrast-active .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:hover:not([aria-disabled=true])::before{top:0;left:0;right:0;bottom:0;position:absolute;box-sizing:border-box;pointer-events:none;border:3px solid;border-radius:4px;content:\"\"}.cdk-high-contrast-active .mat-expansion-panel-content{border-top:1px solid;border-top-left-radius:0;border-top-right-radius:0}\n"]
          }]
        }], function () {
          return [{
            type: _MatExpansionPanel,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_18__.FocusMonitor
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_MAT_EXPANSION_PANEL_DEFAULT_OPTIONS]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.ANIMATION_MODULE_TYPE]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
              args: ['tabindex']
            }]
          }];
        }, {
          expandedHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          collapsedHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }]
        });
      })();
      /**
       * Description element of a `<mat-expansion-panel-header>`.
       */


      var _MatExpansionPanelDescription = /*#__PURE__*/_createClass(function _MatExpansionPanelDescription() {
        _classCallCheck(this, _MatExpansionPanelDescription);
      });

      _MatExpansionPanelDescription.ɵfac = function MatExpansionPanelDescription_Factory(t) {
        return new (t || _MatExpansionPanelDescription)();
      };

      _MatExpansionPanelDescription.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _MatExpansionPanelDescription,
        selectors: [["mat-panel-description"]],
        hostAttrs: [1, "mat-expansion-panel-header-description"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatExpansionPanelDescription, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: 'mat-panel-description',
            host: {
              "class": 'mat-expansion-panel-header-description'
            }
          }]
        }], null, null);
      })();
      /**
       * Title element of a `<mat-expansion-panel-header>`.
       */


      var _MatExpansionPanelTitle = /*#__PURE__*/_createClass(function _MatExpansionPanelTitle() {
        _classCallCheck(this, _MatExpansionPanelTitle);
      });

      _MatExpansionPanelTitle.ɵfac = function MatExpansionPanelTitle_Factory(t) {
        return new (t || _MatExpansionPanelTitle)();
      };

      _MatExpansionPanelTitle.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _MatExpansionPanelTitle,
        selectors: [["mat-panel-title"]],
        hostAttrs: [1, "mat-expansion-panel-header-title"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatExpansionPanelTitle, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: 'mat-panel-title',
            host: {
              "class": 'mat-expansion-panel-header-title'
            }
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Directive for a Material Design Accordion.
       */


      var _MatAccordion = /*#__PURE__*/function (_angular_cdk_accordio2) {
        _inherits(_MatAccordion, _angular_cdk_accordio2);

        var _super3 = _createSuper(_MatAccordion);

        function _MatAccordion() {
          var _this7;

          _classCallCheck(this, _MatAccordion);

          _this7 = _super3.apply(this, arguments);
          /** Headers belonging to this accordion. */

          _this7._ownHeaders = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.QueryList();
          _this7._hideToggle = false;
          /**
           * Display mode used for all expansion panels in the accordion. Currently two display
           * modes exist:
           *  default - a gutter-like spacing is placed around any expanded panel, placing the expanded
           *     panel at a different elevation from the rest of the accordion.
           *  flat - no spacing is placed around expanded panels, showing all panels at the same
           *     elevation.
           */

          _this7.displayMode = 'default';
          /** The position of the expansion indicator. */

          _this7.togglePosition = 'after';
          return _this7;
        }
        /** Whether the expansion indicator should be hidden. */


        _createClass(_MatAccordion, [{
          key: "hideToggle",
          get: function get() {
            return this._hideToggle;
          },
          set: function set(show) {
            this._hideToggle = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__.coerceBooleanProperty)(show);
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this8 = this;

            this._headers.changes.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.startWith)(this._headers)).subscribe(function (headers) {
              _this8._ownHeaders.reset(headers.filter(function (header) {
                return header.panel.accordion === _this8;
              }));

              _this8._ownHeaders.notifyOnChanges();
            });

            this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_18__.FocusKeyManager(this._ownHeaders).withWrap().withHomeAndEnd();
          }
          /** Handles keyboard events coming in from the panel headers. */

        }, {
          key: "_handleHeaderKeydown",
          value: function _handleHeaderKeydown(event) {
            this._keyManager.onKeydown(event);
          }
        }, {
          key: "_handleHeaderFocus",
          value: function _handleHeaderFocus(header) {
            this._keyManager.updateActiveItem(header);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            _get(_getPrototypeOf(_MatAccordion.prototype), "ngOnDestroy", this).call(this);

            this._ownHeaders.destroy();
          }
        }]);

        return _MatAccordion;
      }(_angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_2__.CdkAccordion);

      _MatAccordion.ɵfac = /*@__PURE__*/function () {
        var ɵMatAccordion_BaseFactory;
        return function MatAccordion_Factory(t) {
          return (ɵMatAccordion_BaseFactory || (ɵMatAccordion_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](_MatAccordion)))(t || _MatAccordion);
        };
      }();

      _MatAccordion.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _MatAccordion,
        selectors: [["mat-accordion"]],
        contentQueries: function MatAccordion_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _MatExpansionPanelHeader, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._headers = _t);
          }
        },
        hostAttrs: [1, "mat-accordion"],
        hostVars: 2,
        hostBindings: function MatAccordion_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-accordion-multi", ctx.multi);
          }
        },
        inputs: {
          multi: "multi",
          displayMode: "displayMode",
          togglePosition: "togglePosition",
          hideToggle: "hideToggle"
        },
        exportAs: ["matAccordion"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _MAT_ACCORDION,
          useExisting: _MatAccordion
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
      _MatAccordion.propDecorators = {
        _headers: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
          args: [_MatExpansionPanelHeader, {
            descendants: true
          }]
        }],
        hideToggle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        displayMode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        togglePosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatAccordion, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: 'mat-accordion',
            exportAs: 'matAccordion',
            inputs: ['multi'],
            providers: [{
              provide: _MAT_ACCORDION,
              useExisting: _MatAccordion
            }],
            host: {
              "class": 'mat-accordion',
              // Class binding which is only used by the test harness as there is no other
              // way for the harness to detect if multiple panel support is enabled.
              '[class.mat-accordion-multi]': 'this.multi'
            }
          }]
        }], null, {
          displayMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          togglePosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          hideToggle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          _headers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
            args: [_MatExpansionPanelHeader, {
              descendants: true
            }]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var _MatExpansionModule = /*#__PURE__*/_createClass(function _MatExpansionModule() {
        _classCallCheck(this, _MatExpansionModule);
      });

      _MatExpansionModule.ɵfac = function MatExpansionModule_Factory(t) {
        return new (t || _MatExpansionModule)();
      };

      _MatExpansionModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _MatExpansionModule
      });
      _MatExpansionModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatCommonModule, _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_2__.CdkAccordionModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__.PortalModule]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatExpansionModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatCommonModule, _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_2__.CdkAccordionModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__.PortalModule],
            exports: [_MatAccordion, _MatExpansionPanel, _MatExpansionPanelActionRow, _MatExpansionPanelHeader, _MatExpansionPanelTitle, _MatExpansionPanelDescription, _MatExpansionPanelContent],
            declarations: [_MatAccordion, _MatExpansionPanel, _MatExpansionPanelActionRow, _MatExpansionPanelHeader, _MatExpansionPanelTitle, _MatExpansionPanelDescription, _MatExpansionPanelContent]
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_MatExpansionModule, {
          declarations: function declarations() {
            return [_MatAccordion, _MatExpansionPanel, _MatExpansionPanelActionRow, _MatExpansionPanelHeader, _MatExpansionPanelTitle, _MatExpansionPanelDescription, _MatExpansionPanelContent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatCommonModule, _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_2__.CdkAccordionModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__.PortalModule];
          },
          exports: function exports() {
            return [_MatAccordion, _MatExpansionPanel, _MatExpansionPanelActionRow, _MatExpansionPanelHeader, _MatExpansionPanelTitle, _MatExpansionPanelDescription, _MatExpansionPanelContent];
          }
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=expansion.js.map

      /***/

    },

    /***/
    65939:
    /*!**********************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MAT_TAB": function MAT_TAB() {
          return (
            /* binding */
            _MAT_TAB
          );
        },

        /* harmony export */
        "MAT_TABS_CONFIG": function MAT_TABS_CONFIG() {
          return (
            /* binding */
            _MAT_TABS_CONFIG
          );
        },

        /* harmony export */
        "MAT_TAB_GROUP": function MAT_TAB_GROUP() {
          return (
            /* binding */
            _MAT_TAB_GROUP
          );
        },

        /* harmony export */
        "MatInkBar": function MatInkBar() {
          return (
            /* binding */
            _MatInkBar
          );
        },

        /* harmony export */
        "MatTab": function MatTab() {
          return (
            /* binding */
            _MatTab
          );
        },

        /* harmony export */
        "MatTabBody": function MatTabBody() {
          return (
            /* binding */
            _MatTabBody
          );
        },

        /* harmony export */
        "MatTabBodyPortal": function MatTabBodyPortal() {
          return (
            /* binding */
            _MatTabBodyPortal
          );
        },

        /* harmony export */
        "MatTabChangeEvent": function MatTabChangeEvent() {
          return (
            /* binding */
            _MatTabChangeEvent
          );
        },

        /* harmony export */
        "MatTabContent": function MatTabContent() {
          return (
            /* binding */
            _MatTabContent
          );
        },

        /* harmony export */
        "MatTabGroup": function MatTabGroup() {
          return (
            /* binding */
            _MatTabGroup
          );
        },

        /* harmony export */
        "MatTabHeader": function MatTabHeader() {
          return (
            /* binding */
            _MatTabHeader
          );
        },

        /* harmony export */
        "MatTabLabel": function MatTabLabel() {
          return (
            /* binding */
            _MatTabLabel
          );
        },

        /* harmony export */
        "MatTabLabelWrapper": function MatTabLabelWrapper() {
          return (
            /* binding */
            _MatTabLabelWrapper
          );
        },

        /* harmony export */
        "MatTabLink": function MatTabLink() {
          return (
            /* binding */
            _MatTabLink
          );
        },

        /* harmony export */
        "MatTabNav": function MatTabNav() {
          return (
            /* binding */
            _MatTabNav
          );
        },

        /* harmony export */
        "MatTabsModule": function MatTabsModule() {
          return (
            /* binding */
            _MatTabsModule
          );
        },

        /* harmony export */
        "_MAT_INK_BAR_POSITIONER": function _MAT_INK_BAR_POSITIONER() {
          return (
            /* binding */
            _MAT_INK_BAR_POSITIONER2
          );
        },

        /* harmony export */
        "_MatTabBodyBase": function _MatTabBodyBase() {
          return (
            /* binding */
            _MatTabBodyBase2
          );
        },

        /* harmony export */
        "_MatTabGroupBase": function _MatTabGroupBase() {
          return (
            /* binding */
            _MatTabGroupBase2
          );
        },

        /* harmony export */
        "_MatTabHeaderBase": function _MatTabHeaderBase() {
          return (
            /* binding */
            _MatTabHeaderBase2
          );
        },

        /* harmony export */
        "_MatTabLinkBase": function _MatTabLinkBase() {
          return (
            /* binding */
            _MatTabLinkBase2
          );
        },

        /* harmony export */
        "_MatTabNavBase": function _MatTabNavBase() {
          return (
            /* binding */
            _MatTabNavBase2
          );
        },

        /* harmony export */
        "matTabsAnimations": function matTabsAnimations() {
          return (
            /* binding */
            _matTabsAnimations
          );
        },

        /* harmony export */
        "ɵangular_material_src_material_tabs_tabs_a": function ɵangular_material_src_material_tabs_tabs_a() {
          return (
            /* binding */
            _MAT_INK_BAR_POSITIONER_FACTORY
          );
        },

        /* harmony export */
        "ɵangular_material_src_material_tabs_tabs_b": function ɵangular_material_src_material_tabs_tabs_b() {
          return (
            /* binding */
            MAT_TAB_LABEL
          );
        },

        /* harmony export */
        "ɵangular_material_src_material_tabs_tabs_c": function ɵangular_material_src_material_tabs_tabs_c() {
          return (
            /* binding */
            MAT_TAB_CONTENT
          );
        },

        /* harmony export */
        "ɵangular_material_src_material_tabs_tabs_d": function ɵangular_material_src_material_tabs_tabs_d() {
          return (
            /* binding */
            MatPaginatedTabHeader
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      19238);
      /* harmony import */


      var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/cdk/observers */
      18553);
      /* harmony import */


      var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/portal */
      87636);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/core */
      5015);
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      75835);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      47762);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      46665);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! rxjs */
      33763);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! rxjs */
      96937);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! rxjs */
      41964);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! rxjs */
      77844);
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      70946);
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/animations */
      17238);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      69978);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs/operators */
      42687);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! rxjs/operators */
      25755);
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      39490);
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      71386);
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/cdk/platform */
      80521);
      /* harmony import */


      var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/cdk/keycodes */
      36461);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Injection token for the MatInkBar's Positioner. */


      function MatTab_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      }

      var _c0 = ["*"];

      function MatTabBody_ng_template_2_Template(rf, ctx) {}

      var _c1 = function _c1(a0) {
        return {
          animationDuration: a0
        };
      };

      var _c2 = function _c2(a0, a1) {
        return {
          value: a0,
          params: a1
        };
      };

      var _c3 = ["tabBodyWrapper"];
      var _c4 = ["tabHeader"];

      function MatTabGroup_div_2_ng_template_2_ng_template_0_Template(rf, ctx) {}

      function MatTabGroup_div_2_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatTabGroup_div_2_ng_template_2_ng_template_0_Template, 0, 0, "ng-template", 9);
        }

        if (rf & 2) {
          var tab_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkPortalOutlet", tab_r4.templateLabel);
        }
      }

      function MatTabGroup_div_2_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var tab_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tab_r4.textLabel);
        }
      }

      function MatTabGroup_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatTabGroup_div_2_Template_div_click_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var tab_r4 = restoredCtx.$implicit;
            var i_r5 = restoredCtx.index;

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            return ctx_r11._handleClick(tab_r4, _r0, i_r5);
          })("cdkFocusChange", function MatTabGroup_div_2_Template_div_cdkFocusChange_0_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var i_r5 = restoredCtx.index;

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r13._tabFocusChanged($event, i_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatTabGroup_div_2_ng_template_2_Template, 1, 1, "ng-template", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MatTabGroup_div_2_ng_template_3_Template, 1, 1, "ng-template", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tab_r4 = ctx.$implicit;
          var i_r5 = ctx.index;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-tab-label-active", ctx_r1.selectedIndex == i_r5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r1._getTabLabelId(i_r5))("disabled", tab_r4.disabled)("matRippleDisabled", tab_r4.disabled || ctx_r1.disableRipple);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabIndex", ctx_r1._getTabIndex(tab_r4, i_r5))("aria-posinset", i_r5 + 1)("aria-setsize", ctx_r1._tabs.length)("aria-controls", ctx_r1._getTabContentId(i_r5))("aria-selected", ctx_r1.selectedIndex == i_r5)("aria-label", tab_r4.ariaLabel || null)("aria-labelledby", !tab_r4.ariaLabel && tab_r4.ariaLabelledby ? tab_r4.ariaLabelledby : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tab_r4.templateLabel);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !tab_r4.templateLabel);
        }
      }

      function MatTabGroup_mat_tab_body_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab-body", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("_onCentered", function MatTabGroup_mat_tab_body_5_Template_mat_tab_body__onCentered_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r16._removeTabBodyWrapperHeight();
          })("_onCentering", function MatTabGroup_mat_tab_body_5_Template_mat_tab_body__onCentering_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r18._setTabBodyWrapperHeight($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tab_r14 = ctx.$implicit;
          var i_r15 = ctx.index;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-tab-body-active", ctx_r3.selectedIndex === i_r15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r3._getTabContentId(i_r15))("content", tab_r14.content)("position", tab_r14.position)("origin", tab_r14.origin)("animationDuration", ctx_r3.animationDuration);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx_r3.contentTabIndex != null && ctx_r3.selectedIndex === i_r15 ? ctx_r3.contentTabIndex : null)("aria-labelledby", ctx_r3._getTabLabelId(i_r15));
        }
      }

      var _c5 = ["tabListContainer"];
      var _c6 = ["tabList"];
      var _c7 = ["nextPaginator"];
      var _c8 = ["previousPaginator"];
      var _c9 = ["mat-tab-nav-bar", ""];

      var _MAT_INK_BAR_POSITIONER2 = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MatInkBarPositioner', {
        providedIn: 'root',
        factory: _MAT_INK_BAR_POSITIONER_FACTORY
      });
      /**
       * The default positioner function for the MatInkBar.
       * @docs-private
       */


      function _MAT_INK_BAR_POSITIONER_FACTORY() {
        var method = function method(element) {
          return {
            left: element ? (element.offsetLeft || 0) + 'px' : '0',
            width: element ? (element.offsetWidth || 0) + 'px' : '0'
          };
        };

        return method;
      }
      /**
       * The ink-bar is used to display and animate the line underneath the current active tab label.
       * @docs-private
       */


      var _MatInkBar = /*#__PURE__*/function () {
        function _MatInkBar(_elementRef, _ngZone, _inkBarPositioner, _animationMode) {
          _classCallCheck(this, _MatInkBar);

          this._elementRef = _elementRef;
          this._ngZone = _ngZone;
          this._inkBarPositioner = _inkBarPositioner;
          this._animationMode = _animationMode;
        }
        /**
         * Calculates the styles from the provided element in order to align the ink-bar to that element.
         * Shows the ink bar if previously set as hidden.
         * @param element
         */


        _createClass(_MatInkBar, [{
          key: "alignToElement",
          value: function alignToElement(element) {
            var _this9 = this;

            this.show();

            if (typeof requestAnimationFrame !== 'undefined') {
              this._ngZone.runOutsideAngular(function () {
                requestAnimationFrame(function () {
                  return _this9._setStyles(element);
                });
              });
            } else {
              this._setStyles(element);
            }
          }
          /** Shows the ink bar. */

        }, {
          key: "show",
          value: function show() {
            this._elementRef.nativeElement.style.visibility = 'visible';
          }
          /** Hides the ink bar. */

        }, {
          key: "hide",
          value: function hide() {
            this._elementRef.nativeElement.style.visibility = 'hidden';
          }
          /**
           * Sets the proper styles to the ink bar element.
           * @param element
           */

        }, {
          key: "_setStyles",
          value: function _setStyles(element) {
            var positions = this._inkBarPositioner(element);

            var inkBar = this._elementRef.nativeElement;
            inkBar.style.left = positions.left;
            inkBar.style.width = positions.width;
          }
        }]);

        return _MatInkBar;
      }();

      _MatInkBar.ɵfac = function MatInkBar_Factory(t) {
        return new (t || _MatInkBar)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_MAT_INK_BAR_POSITIONER2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE, 8));
      };

      _MatInkBar.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _MatInkBar,
        selectors: [["mat-ink-bar"]],
        hostAttrs: [1, "mat-ink-bar"],
        hostVars: 2,
        hostBindings: function MatInkBar_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
          }
        }
      });

      _MatInkBar.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_MAT_INK_BAR_POSITIONER2]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatInkBar, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: 'mat-ink-bar',
            host: {
              'class': 'mat-ink-bar',
              '[class._mat-animation-noopable]': "_animationMode === 'NoopAnimations'"
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_MAT_INK_BAR_POSITIONER2]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE]
            }]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Injection token that can be used to reference instances of `MatTabContent`. It serves as
       * alternative token to the actual `MatTabContent` class which could cause unnecessary
       * retention of the class and its directive metadata.
       */


      var MAT_TAB_CONTENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MatTabContent');
      /** Decorates the `ng-template` tags and reads out the template from it. */

      var _MatTabContent = /*#__PURE__*/_createClass(function _MatTabContent(
      /** Content for the tab. */
      template) {
        _classCallCheck(this, _MatTabContent);

        this.template = template;
      });

      _MatTabContent.ɵfac = function MatTabContent_Factory(t) {
        return new (t || _MatTabContent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
      };

      _MatTabContent.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _MatTabContent,
        selectors: [["", "matTabContent", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: MAT_TAB_CONTENT,
          useExisting: _MatTabContent
        }])]
      });

      _MatTabContent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatTabContent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[matTabContent]',
            providers: [{
              provide: MAT_TAB_CONTENT,
              useExisting: _MatTabContent
            }]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Injection token that can be used to reference instances of `MatTabLabel`. It serves as
       * alternative token to the actual `MatTabLabel` class which could cause unnecessary
       * retention of the class and its directive metadata.
       */


      var MAT_TAB_LABEL = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MatTabLabel');
      /**
       * Used to provide a tab label to a tab without causing a circular dependency.
       * @docs-private
       */

      var _MAT_TAB = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_TAB');
      /** Used to flag tab labels for use with the portal directive */


      var _MatTabLabel = /*#__PURE__*/function (_angular_cdk_portal__) {
        _inherits(_MatTabLabel, _angular_cdk_portal__);

        var _super4 = _createSuper(_MatTabLabel);

        function _MatTabLabel(templateRef, viewContainerRef, _closestTab) {
          var _this10;

          _classCallCheck(this, _MatTabLabel);

          _this10 = _super4.call(this, templateRef, viewContainerRef);
          _this10._closestTab = _closestTab;
          return _this10;
        }

        return _createClass(_MatTabLabel);
      }(_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__.CdkPortal);

      _MatTabLabel.ɵfac = function MatTabLabel_Factory(t) {
        return new (t || _MatTabLabel)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_MAT_TAB, 8));
      };

      _MatTabLabel.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _MatTabLabel,
        selectors: [["", "mat-tab-label", ""], ["", "matTabLabel", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: MAT_TAB_LABEL,
          useExisting: _MatTabLabel
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      _MatTabLabel.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_MAT_TAB]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatTabLabel, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[mat-tab-label], [matTabLabel]',
            providers: [{
              provide: MAT_TAB_LABEL,
              useExisting: _MatTabLabel
            }]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_MAT_TAB]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // Boilerplate for applying mixins to MatTab.

      /** @docs-private */


      var _MatTabBase = (0, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.mixinDisabled)( /*#__PURE__*/function () {
        function _class() {
          _classCallCheck(this, _class);
        }

        return _createClass(_class);
      }());
      /**
       * Used to provide a tab group to a tab without causing a circular dependency.
       * @docs-private
       */


      var _MAT_TAB_GROUP = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_TAB_GROUP');

      var _MatTab = /*#__PURE__*/function (_MatTabBase2) {
        _inherits(_MatTab, _MatTabBase2);

        var _super5 = _createSuper(_MatTab);

        function _MatTab(_viewContainerRef, _closestTabGroup) {
          var _this11;

          _classCallCheck(this, _MatTab);

          _this11 = _super5.call(this);
          _this11._viewContainerRef = _viewContainerRef;
          _this11._closestTabGroup = _closestTabGroup;
          /** Plain text label for the tab, used when there is no template label. */

          _this11.textLabel = '';
          /** Portal that will be the hosted content of the tab */

          _this11._contentPortal = null;
          /** Emits whenever the internal state of the tab changes. */

          _this11._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
          /**
           * The relatively indexed position where 0 represents the center, negative is left, and positive
           * represents the right.
           */

          _this11.position = null;
          /**
           * The initial relatively index origin of the tab if it was created and selected after there
           * was already a selected tab. Provides context of what position the tab should originate from.
           */

          _this11.origin = null;
          /**
           * Whether the tab is currently active.
           */

          _this11.isActive = false;
          return _this11;
        }
        /** Content for the tab label given by `<ng-template mat-tab-label>`. */


        _createClass(_MatTab, [{
          key: "templateLabel",
          get: function get() {
            return this._templateLabel;
          },
          set: function set(value) {
            this._setTemplateLabelInput(value);
          }
          /** @docs-private */

        }, {
          key: "content",
          get: function get() {
            return this._contentPortal;
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.hasOwnProperty('textLabel') || changes.hasOwnProperty('disabled')) {
              this._stateChanges.next();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._stateChanges.complete();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this._contentPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__.TemplatePortal(this._explicitContent || this._implicitContent, this._viewContainerRef);
          }
          /**
           * This has been extracted to a util because of TS 4 and VE.
           * View Engine doesn't support property rename inheritance.
           * TS 4.0 doesn't allow properties to override accessors or vice-versa.
           * @docs-private
           */

        }, {
          key: "_setTemplateLabelInput",
          value: function _setTemplateLabelInput(value) {
            // Only update the label if the query managed to find one. This works around an issue where a
            // user may have manually set `templateLabel` during creation mode, which would then get
            // clobbered by `undefined` when the query resolves. Also note that we check that the closest
            // tab matches the current one so that we don't pick up labels from nested tabs.
            if (value && value._closestTab === this) {
              this._templateLabel = value;
            }
          }
        }]);

        return _MatTab;
      }(_MatTabBase);

      _MatTab.ɵfac = function MatTab_Factory(t) {
        return new (t || _MatTab)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_MAT_TAB_GROUP, 8));
      };

      _MatTab.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _MatTab,
        selectors: [["mat-tab"]],
        contentQueries: function MatTab_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MAT_TAB_LABEL, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MAT_TAB_CONTENT, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templateLabel = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._explicitContent = _t.first);
          }
        },
        viewQuery: function MatTab_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, 7);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._implicitContent = _t.first);
          }
        },
        inputs: {
          disabled: "disabled",
          textLabel: ["label", "textLabel"],
          ariaLabel: ["aria-label", "ariaLabel"],
          ariaLabelledby: ["aria-labelledby", "ariaLabelledby"]
        },
        exportAs: ["matTab"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _MAT_TAB,
          useExisting: _MatTab
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function MatTab_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatTab_ng_template_0_Template, 1, 0, "ng-template");
          }
        },
        encapsulation: 2
      });

      _MatTab.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_MAT_TAB_GROUP]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }]
        }];
      };

      _MatTab.propDecorators = {
        templateLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
          args: [MAT_TAB_LABEL]
        }],
        _explicitContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
          args: [MAT_TAB_CONTENT, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef,
            "static": true
          }]
        }],
        _implicitContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, {
            "static": true
          }]
        }],
        textLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
          args: ['label']
        }],
        ariaLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
          args: ['aria-label']
        }],
        ariaLabelledby: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
          args: ['aria-labelledby']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatTab, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'mat-tab',
            template: "<!-- Create a template for the content of the <mat-tab> so that we can grab a reference to this\n    TemplateRef and use it in a Portal to render the tab content in the appropriate place in the\n    tab-group. -->\n<ng-template><ng-content></ng-content></ng-template>\n",
            inputs: ['disabled'],
            // tslint:disable-next-line:validate-decorators
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.Default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
            exportAs: 'matTab',
            providers: [{
              provide: _MAT_TAB,
              useExisting: _MatTab
            }]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_MAT_TAB_GROUP]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }]
          }];
        }, {
          textLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['label']
          }],
          templateLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [MAT_TAB_LABEL]
          }],
          _explicitContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [MAT_TAB_CONTENT, {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef,
              "static": true
            }]
          }],
          _implicitContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, {
              "static": true
            }]
          }],
          ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['aria-label']
          }],
          ariaLabelledby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['aria-labelledby']
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Animations used by the Material tabs.
       * @docs-private
       */


      var _matTabsAnimations = {
        /** Animation translates a tab along the X axis. */
        translateTab: (0, _angular_animations__WEBPACK_IMPORTED_MODULE_5__.trigger)('translateTab', [// Note: transitions to `none` instead of 0, because some browsers might blur the content.
        (0, _angular_animations__WEBPACK_IMPORTED_MODULE_5__.state)('center, void, left-origin-center, right-origin-center', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
          transform: 'none'
        })), // If the tab is either on the left or right, we additionally add a `min-height` of 1px
        // in order to ensure that the element has a height before its state changes. This is
        // necessary because Chrome does seem to skip the transition in RTL mode if the element does
        // not have a static height and is not rendered. See related issue: #9465
        (0, _angular_animations__WEBPACK_IMPORTED_MODULE_5__.state)('left', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
          transform: 'translate3d(-100%, 0, 0)',
          minHeight: '1px'
        })), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_5__.state)('right', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
          transform: 'translate3d(100%, 0, 0)',
          minHeight: '1px'
        })), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)('* => left, * => right, left => center, right => center', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)')), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)('void => left-origin-center', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
          transform: 'translate3d(-100%, 0, 0)'
        }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)')]), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)('void => right-origin-center', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
          transform: 'translate3d(100%, 0, 0)'
        }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)')])])
      };
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * The portal host directive for the contents of the tab.
       * @docs-private
       */

      var _MatTabBodyPortal = /*#__PURE__*/function (_angular_cdk_portal__2) {
        _inherits(_MatTabBodyPortal, _angular_cdk_portal__2);

        var _super6 = _createSuper(_MatTabBodyPortal);

        function _MatTabBodyPortal(componentFactoryResolver, viewContainerRef, _host, _document) {
          var _this12;

          _classCallCheck(this, _MatTabBodyPortal);

          _this12 = _super6.call(this, componentFactoryResolver, viewContainerRef, _document);
          _this12._host = _host;
          /** Subscription to events for when the tab body begins centering. */

          _this12._centeringSub = rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription.EMPTY;
          /** Subscription to events for when the tab body finishes leaving from center position. */

          _this12._leavingSub = rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription.EMPTY;
          return _this12;
        }
        /** Set initial visibility or set up subscription for changing visibility. */


        _createClass(_MatTabBodyPortal, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this13 = this;

            _get(_getPrototypeOf(_MatTabBodyPortal.prototype), "ngOnInit", this).call(this);

            this._centeringSub = this._host._beforeCentering.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.startWith)(this._host._isCenterPosition(this._host._position))).subscribe(function (isCentering) {
              if (isCentering && !_this13.hasAttached()) {
                _this13.attach(_this13._host._content);
              }
            });
            this._leavingSub = this._host._afterLeavingCenter.subscribe(function () {
              _this13.detach();
            });
          }
          /** Clean up centering subscription. */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            _get(_getPrototypeOf(_MatTabBodyPortal.prototype), "ngOnDestroy", this).call(this);

            this._centeringSub.unsubscribe();

            this._leavingSub.unsubscribe();
          }
        }]);

        return _MatTabBodyPortal;
      }(_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__.CdkPortalOutlet);

      _MatTabBodyPortal.ɵfac = function MatTabBodyPortal_Factory(t) {
        return new (t || _MatTabBodyPortal)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]((0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function () {
          return _MatTabBody;
        })), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.DOCUMENT));
      };

      _MatTabBodyPortal.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _MatTabBodyPortal,
        selectors: [["", "matTabBodyHost", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      _MatTabBodyPortal.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
        }, {
          type: _MatTabBody,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function () {
              return _MatTabBody;
            })]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.DOCUMENT]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatTabBodyPortal, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[matTabBodyHost]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
          }, {
            type: _MatTabBody,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function () {
                return _MatTabBody;
              })]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.DOCUMENT]
            }]
          }];
        }, null);
      })();
      /**
       * Base class with all of the `MatTabBody` functionality.
       * @docs-private
       */


      var _MatTabBodyBase2 = /*#__PURE__*/function () {
        function _MatTabBodyBase2(_elementRef, _dir, changeDetectorRef) {
          var _this14 = this;

          _classCallCheck(this, _MatTabBodyBase2);

          this._elementRef = _elementRef;
          this._dir = _dir;
          /** Subscription to the directionality change observable. */

          this._dirChangeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription.EMPTY;
          /** Emits when an animation on the tab is complete. */

          this._translateTabComplete = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
          /** Event emitted when the tab begins to animate towards the center as the active tab. */

          this._onCentering = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          /** Event emitted before the centering of the tab begins. */

          this._beforeCentering = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          /** Event emitted before the centering of the tab begins. */

          this._afterLeavingCenter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          /** Event emitted when the tab completes its animation towards the center. */

          this._onCentered = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(true); // Note that the default value will always be overwritten by `MatTabBody`, but we need one
          // anyway to prevent the animations module from throwing an error if the body is used on its own.

          /** Duration for the tab's animation. */

          this.animationDuration = '500ms';

          if (_dir) {
            this._dirChangeSubscription = _dir.change.subscribe(function (dir) {
              _this14._computePositionAnimationState(dir);

              changeDetectorRef.markForCheck();
            });
          } // Ensure that we get unique animation events, because the `.done` callback can get
          // invoked twice in some browsers. See https://github.com/angular/angular/issues/24084.


          this._translateTabComplete.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.distinctUntilChanged)(function (x, y) {
            return x.fromState === y.fromState && x.toState === y.toState;
          })).subscribe(function (event) {
            // If the transition to the center is complete, emit an event.
            if (_this14._isCenterPosition(event.toState) && _this14._isCenterPosition(_this14._position)) {
              _this14._onCentered.emit();
            }

            if (_this14._isCenterPosition(event.fromState) && !_this14._isCenterPosition(_this14._position)) {
              _this14._afterLeavingCenter.emit();
            }
          });
        }
        /** The shifted index position of the tab body, where zero represents the active center tab. */


        _createClass(_MatTabBodyBase2, [{
          key: "position",
          set: function set(position) {
            this._positionIndex = position;

            this._computePositionAnimationState();
          }
          /**
           * After initialized, check if the content is centered and has an origin. If so, set the
           * special position states that transition the tab from the left or right before centering.
           */

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this._position == 'center' && this.origin != null) {
              this._position = this._computePositionFromOrigin(this.origin);
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._dirChangeSubscription.unsubscribe();

            this._translateTabComplete.complete();
          }
        }, {
          key: "_onTranslateTabStarted",
          value: function _onTranslateTabStarted(event) {
            var isCentering = this._isCenterPosition(event.toState);

            this._beforeCentering.emit(isCentering);

            if (isCentering) {
              this._onCentering.emit(this._elementRef.nativeElement.clientHeight);
            }
          }
          /** The text direction of the containing app. */

        }, {
          key: "_getLayoutDirection",
          value: function _getLayoutDirection() {
            return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
          }
          /** Whether the provided position state is considered center, regardless of origin. */

        }, {
          key: "_isCenterPosition",
          value: function _isCenterPosition(position) {
            return position == 'center' || position == 'left-origin-center' || position == 'right-origin-center';
          }
          /** Computes the position state that will be used for the tab-body animation trigger. */

        }, {
          key: "_computePositionAnimationState",
          value: function _computePositionAnimationState() {
            var dir = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._getLayoutDirection();

            if (this._positionIndex < 0) {
              this._position = dir == 'ltr' ? 'left' : 'right';
            } else if (this._positionIndex > 0) {
              this._position = dir == 'ltr' ? 'right' : 'left';
            } else {
              this._position = 'center';
            }
          }
          /**
           * Computes the position state based on the specified origin position. This is used if the
           * tab is becoming visible immediately after creation.
           */

        }, {
          key: "_computePositionFromOrigin",
          value: function _computePositionFromOrigin(origin) {
            var dir = this._getLayoutDirection();

            if (dir == 'ltr' && origin <= 0 || dir == 'rtl' && origin > 0) {
              return 'left-origin-center';
            }

            return 'right-origin-center';
          }
        }]);

        return _MatTabBodyBase2;
      }();

      _MatTabBodyBase2.ɵfac = function _MatTabBodyBase_Factory(t) {
        return new (t || _MatTabBodyBase2)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
      };

      _MatTabBodyBase2.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _MatTabBodyBase2,
        inputs: {
          animationDuration: "animationDuration",
          position: "position",
          _content: ["content", "_content"],
          origin: "origin"
        },
        outputs: {
          _onCentering: "_onCentering",
          _beforeCentering: "_beforeCentering",
          _afterLeavingCenter: "_afterLeavingCenter",
          _onCentered: "_onCentered"
        }
      });

      _MatTabBodyBase2.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
        }];
      };

      _MatTabBodyBase2.propDecorators = {
        _onCentering: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        _beforeCentering: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        _afterLeavingCenter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        _onCentered: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        _content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
          args: ['content']
        }],
        origin: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        animationDuration: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        position: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatTabBodyBase2, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
          }];
        }, {
          _onCentering: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          _beforeCentering: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          _afterLeavingCenter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          _onCentered: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          animationDuration: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          _content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['content']
          }],
          origin: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }]
        });
      })();
      /**
       * Wrapper for the contents of a tab.
       * @docs-private
       */


      var _MatTabBody = /*#__PURE__*/function (_MatTabBodyBase3) {
        _inherits(_MatTabBody, _MatTabBodyBase3);

        var _super7 = _createSuper(_MatTabBody);

        function _MatTabBody(elementRef, dir, changeDetectorRef) {
          _classCallCheck(this, _MatTabBody);

          return _super7.call(this, elementRef, dir, changeDetectorRef);
        }

        return _createClass(_MatTabBody);
      }(_MatTabBodyBase2);

      _MatTabBody.ɵfac = function MatTabBody_Factory(t) {
        return new (t || _MatTabBody)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
      };

      _MatTabBody.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _MatTabBody,
        selectors: [["mat-tab-body"]],
        viewQuery: function MatTabBody_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__.CdkPortalOutlet, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._portalHost = _t.first);
          }
        },
        hostAttrs: [1, "mat-tab-body"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 3,
        vars: 6,
        consts: [["cdkScrollable", "", 1, "mat-tab-body-content"], ["content", ""], ["matTabBodyHost", ""]],
        template: function MatTabBody_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@translateTab.start", function MatTabBody_Template_div_animation_translateTab_start_0_listener($event) {
              return ctx._onTranslateTabStarted($event);
            })("@translateTab.done", function MatTabBody_Template_div_animation_translateTab_done_0_listener($event) {
              return ctx._translateTabComplete.next($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatTabBody_ng_template_2_Template, 0, 0, "ng-template", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@translateTab", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c2, ctx._position, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c1, ctx.animationDuration)));
          }
        },
        directives: [_MatTabBodyPortal],
        styles: [".mat-tab-body-content{height:100%;overflow:auto}.mat-tab-group-dynamic-height .mat-tab-body-content{overflow:hidden}\n"],
        encapsulation: 2,
        data: {
          animation: [_matTabsAnimations.translateTab]
        }
      });

      _MatTabBody.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
        }];
      };

      _MatTabBody.propDecorators = {
        _portalHost: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
          args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__.CdkPortalOutlet]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatTabBody, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'mat-tab-body',
            template: "<div class=\"mat-tab-body-content\" #content\n     [@translateTab]=\"{\n        value: _position,\n        params: {animationDuration: animationDuration}\n     }\"\n     (@translateTab.start)=\"_onTranslateTabStarted($event)\"\n     (@translateTab.done)=\"_translateTabComplete.next($event)\"\n     cdkScrollable>\n  <ng-template matTabBodyHost></ng-template>\n</div>\n",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
            // tslint:disable-next-line:validate-decorators
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.Default,
            animations: [_matTabsAnimations.translateTab],
            host: {
              'class': 'mat-tab-body'
            },
            styles: [".mat-tab-body-content{height:100%;overflow:auto}.mat-tab-group-dynamic-height .mat-tab-body-content{overflow:hidden}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
          }];
        }, {
          _portalHost: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__.CdkPortalOutlet]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Injection token that can be used to provide the default options the tabs module. */


      var _MAT_TABS_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_TABS_CONFIG');
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Used to generate unique ID's for each tab component */


      var nextId = 0;
      /** A simple change event emitted on focus or selection changes. */

      var _MatTabChangeEvent = /*#__PURE__*/_createClass(function _MatTabChangeEvent() {
        _classCallCheck(this, _MatTabChangeEvent);
      }); // Boilerplate for applying mixins to MatTabGroup.

      /** @docs-private */


      var _MatTabGroupMixinBase = (0, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.mixinColor)((0, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.mixinDisableRipple)( /*#__PURE__*/function () {
        function _class2(_elementRef) {
          _classCallCheck(this, _class2);

          this._elementRef = _elementRef;
        }

        return _createClass(_class2);
      }()), 'primary');
      /**
       * Base class with all of the `MatTabGroupBase` functionality.
       * @docs-private
       */


      var _MatTabGroupBase2 = /*#__PURE__*/function (_MatTabGroupMixinBase2) {
        _inherits(_MatTabGroupBase2, _MatTabGroupMixinBase2);

        var _super8 = _createSuper(_MatTabGroupBase2);

        function _MatTabGroupBase2(elementRef, _changeDetectorRef, defaultConfig, _animationMode) {
          var _this15;

          _classCallCheck(this, _MatTabGroupBase2);

          var _a;

          _this15 = _super8.call(this, elementRef);
          _this15._changeDetectorRef = _changeDetectorRef;
          _this15._animationMode = _animationMode;
          /** All of the tabs that belong to the group. */

          _this15._tabs = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.QueryList();
          /** The tab index that should be selected after the content has been checked. */

          _this15._indexToSelect = 0;
          /** Snapshot of the height of the tab body wrapper before another tab is activated. */

          _this15._tabBodyWrapperHeight = 0;
          /** Subscription to tabs being added/removed. */

          _this15._tabsSubscription = rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription.EMPTY;
          /** Subscription to changes in the tab labels. */

          _this15._tabLabelSubscription = rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription.EMPTY;
          _this15._selectedIndex = null;
          /** Position of the tab header. */

          _this15.headerPosition = 'above';
          /** Output to enable support for two-way binding on `[(selectedIndex)]` */

          _this15.selectedIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          /** Event emitted when focus has changed within a tab group. */

          _this15.focusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          /** Event emitted when the body animation has completed */

          _this15.animationDone = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          /** Event emitted when the tab selection has changed. */

          _this15.selectedTabChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(true);
          _this15._groupId = nextId++;
          _this15.animationDuration = defaultConfig && defaultConfig.animationDuration ? defaultConfig.animationDuration : '500ms';
          _this15.disablePagination = defaultConfig && defaultConfig.disablePagination != null ? defaultConfig.disablePagination : false;
          _this15.dynamicHeight = defaultConfig && defaultConfig.dynamicHeight != null ? defaultConfig.dynamicHeight : false;
          _this15.contentTabIndex = (_a = defaultConfig === null || defaultConfig === void 0 ? void 0 : defaultConfig.contentTabIndex) !== null && _a !== void 0 ? _a : null;
          return _this15;
        }
        /** Whether the tab group should grow to the size of the active tab. */


        _createClass(_MatTabGroupBase2, [{
          key: "dynamicHeight",
          get: function get() {
            return this._dynamicHeight;
          },
          set: function set(value) {
            this._dynamicHeight = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__.coerceBooleanProperty)(value);
          }
          /** The index of the active tab. */

        }, {
          key: "selectedIndex",
          get: function get() {
            return this._selectedIndex;
          },
          set: function set(value) {
            this._indexToSelect = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__.coerceNumberProperty)(value, null);
          }
          /** Duration for the tab animation. Will be normalized to milliseconds if no units are set. */

        }, {
          key: "animationDuration",
          get: function get() {
            return this._animationDuration;
          },
          set: function set(value) {
            this._animationDuration = /^\d+$/.test(value) ? value + 'ms' : value;
          }
          /**
           * `tabindex` to be set on the inner element that wraps the tab content. Can be used for improved
           * accessibility when the tab does not have focusable elements or if it has scrollable content.
           * The `tabindex` will be removed automatically for inactive tabs.
           * Read more at https://www.w3.org/TR/wai-aria-practices/examples/tabs/tabs-2/tabs.html
           */

        }, {
          key: "contentTabIndex",
          get: function get() {
            return this._contentTabIndex;
          },
          set: function set(value) {
            this._contentTabIndex = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__.coerceNumberProperty)(value, null);
          }
          /** Background color of the tab group. */

        }, {
          key: "backgroundColor",
          get: function get() {
            return this._backgroundColor;
          },
          set: function set(value) {
            var nativeElement = this._elementRef.nativeElement;
            nativeElement.classList.remove("mat-background-".concat(this.backgroundColor));

            if (value) {
              nativeElement.classList.add("mat-background-".concat(value));
            }

            this._backgroundColor = value;
          }
          /**
           * After the content is checked, this component knows what tabs have been defined
           * and what the selected index should be. This is where we can know exactly what position
           * each tab should be in according to the new selected index, and additionally we know how
           * a new selected tab should transition in (from the left or right).
           */

        }, {
          key: "ngAfterContentChecked",
          value: function ngAfterContentChecked() {
            var _this16 = this;

            // Don't clamp the `indexToSelect` immediately in the setter because it can happen that
            // the amount of tabs changes before the actual change detection runs.
            var indexToSelect = this._indexToSelect = this._clampTabIndex(this._indexToSelect); // If there is a change in selected index, emit a change event. Should not trigger if
            // the selected index has not yet been initialized.


            if (this._selectedIndex != indexToSelect) {
              var isFirstRun = this._selectedIndex == null;

              if (!isFirstRun) {
                this.selectedTabChange.emit(this._createChangeEvent(indexToSelect)); // Preserve the height so page doesn't scroll up during tab change.
                // Fixes https://stackblitz.com/edit/mat-tabs-scroll-page-top-on-tab-change

                var wrapper = this._tabBodyWrapper.nativeElement;
                wrapper.style.minHeight = wrapper.clientHeight + 'px';
              } // Changing these values after change detection has run
              // since the checked content may contain references to them.


              Promise.resolve().then(function () {
                _this16._tabs.forEach(function (tab, index) {
                  return tab.isActive = index === indexToSelect;
                });

                if (!isFirstRun) {
                  _this16.selectedIndexChange.emit(indexToSelect); // Clear the min-height, this was needed during tab change to avoid
                  // unnecessary scrolling.


                  _this16._tabBodyWrapper.nativeElement.style.minHeight = '';
                }
              });
            } // Setup the position for each tab and optionally setup an origin on the next selected tab.


            this._tabs.forEach(function (tab, index) {
              tab.position = index - indexToSelect; // If there is already a selected tab, then set up an origin for the next selected tab
              // if it doesn't have one already.

              if (_this16._selectedIndex != null && tab.position == 0 && !tab.origin) {
                tab.origin = indexToSelect - _this16._selectedIndex;
              }
            });

            if (this._selectedIndex !== indexToSelect) {
              this._selectedIndex = indexToSelect;

              this._changeDetectorRef.markForCheck();
            }
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this17 = this;

            this._subscribeToAllTabChanges();

            this._subscribeToTabLabels(); // Subscribe to changes in the amount of tabs, in order to be
            // able to re-render the content as new tabs are added or removed.


            this._tabsSubscription = this._tabs.changes.subscribe(function () {
              var indexToSelect = _this17._clampTabIndex(_this17._indexToSelect); // Maintain the previously-selected tab if a new tab is added or removed and there is no
              // explicit change that selects a different tab.


              if (indexToSelect === _this17._selectedIndex) {
                var tabs = _this17._tabs.toArray();

                for (var i = 0; i < tabs.length; i++) {
                  if (tabs[i].isActive) {
                    // Assign both to the `_indexToSelect` and `_selectedIndex` so we don't fire a changed
                    // event, otherwise the consumer may end up in an infinite loop in some edge cases like
                    // adding a tab within the `selectedIndexChange` event.
                    _this17._indexToSelect = _this17._selectedIndex = i;
                    break;
                  }
                }
              }

              _this17._changeDetectorRef.markForCheck();
            });
          }
          /** Listens to changes in all of the tabs. */

        }, {
          key: "_subscribeToAllTabChanges",
          value: function _subscribeToAllTabChanges() {
            var _this18 = this;

            // Since we use a query with `descendants: true` to pick up the tabs, we may end up catching
            // some that are inside of nested tab groups. We filter them out manually by checking that
            // the closest group to the tab is the current one.
            this._allTabs.changes.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.startWith)(this._allTabs)).subscribe(function (tabs) {
              _this18._tabs.reset(tabs.filter(function (tab) {
                return tab._closestTabGroup === _this18 || !tab._closestTabGroup;
              }));

              _this18._tabs.notifyOnChanges();
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._tabs.destroy();

            this._tabsSubscription.unsubscribe();

            this._tabLabelSubscription.unsubscribe();
          }
          /** Re-aligns the ink bar to the selected tab element. */

        }, {
          key: "realignInkBar",
          value: function realignInkBar() {
            if (this._tabHeader) {
              this._tabHeader._alignInkBarToSelectedTab();
            }
          }
          /**
           * Sets focus to a particular tab.
           * @param index Index of the tab to be focused.
           */

        }, {
          key: "focusTab",
          value: function focusTab(index) {
            var header = this._tabHeader;

            if (header) {
              header.focusIndex = index;
            }
          }
        }, {
          key: "_focusChanged",
          value: function _focusChanged(index) {
            this.focusChange.emit(this._createChangeEvent(index));
          }
        }, {
          key: "_createChangeEvent",
          value: function _createChangeEvent(index) {
            var event = new _MatTabChangeEvent();
            event.index = index;

            if (this._tabs && this._tabs.length) {
              event.tab = this._tabs.toArray()[index];
            }

            return event;
          }
          /**
           * Subscribes to changes in the tab labels. This is needed, because the @Input for the label is
           * on the MatTab component, whereas the data binding is inside the MatTabGroup. In order for the
           * binding to be updated, we need to subscribe to changes in it and trigger change detection
           * manually.
           */

        }, {
          key: "_subscribeToTabLabels",
          value: function _subscribeToTabLabels() {
            var _this19 = this;

            if (this._tabLabelSubscription) {
              this._tabLabelSubscription.unsubscribe();
            }

            this._tabLabelSubscription = (0, rxjs__WEBPACK_IMPORTED_MODULE_12__.merge).apply(void 0, _toConsumableArray(this._tabs.map(function (tab) {
              return tab._stateChanges;
            }))).subscribe(function () {
              return _this19._changeDetectorRef.markForCheck();
            });
          }
          /** Clamps the given index to the bounds of 0 and the tabs length. */

        }, {
          key: "_clampTabIndex",
          value: function _clampTabIndex(index) {
            // Note the `|| 0`, which ensures that values like NaN can't get through
            // and which would otherwise throw the component into an infinite loop
            // (since Math.max(NaN, 0) === NaN).
            return Math.min(this._tabs.length - 1, Math.max(index || 0, 0));
          }
          /** Returns a unique id for each tab label element */

        }, {
          key: "_getTabLabelId",
          value: function _getTabLabelId(i) {
            return "mat-tab-label-".concat(this._groupId, "-").concat(i);
          }
          /** Returns a unique id for each tab content element */

        }, {
          key: "_getTabContentId",
          value: function _getTabContentId(i) {
            return "mat-tab-content-".concat(this._groupId, "-").concat(i);
          }
          /**
           * Sets the height of the body wrapper to the height of the activating tab if dynamic
           * height property is true.
           */

        }, {
          key: "_setTabBodyWrapperHeight",
          value: function _setTabBodyWrapperHeight(tabHeight) {
            if (!this._dynamicHeight || !this._tabBodyWrapperHeight) {
              return;
            }

            var wrapper = this._tabBodyWrapper.nativeElement;
            wrapper.style.height = this._tabBodyWrapperHeight + 'px'; // This conditional forces the browser to paint the height so that
            // the animation to the new height can have an origin.

            if (this._tabBodyWrapper.nativeElement.offsetHeight) {
              wrapper.style.height = tabHeight + 'px';
            }
          }
          /** Removes the height of the tab body wrapper. */

        }, {
          key: "_removeTabBodyWrapperHeight",
          value: function _removeTabBodyWrapperHeight() {
            var wrapper = this._tabBodyWrapper.nativeElement;
            this._tabBodyWrapperHeight = wrapper.clientHeight;
            wrapper.style.height = '';
            this.animationDone.emit();
          }
          /** Handle click events, setting new selected index if appropriate. */

        }, {
          key: "_handleClick",
          value: function _handleClick(tab, tabHeader, index) {
            if (!tab.disabled) {
              this.selectedIndex = tabHeader.focusIndex = index;
            }
          }
          /** Retrieves the tabindex for the tab. */

        }, {
          key: "_getTabIndex",
          value: function _getTabIndex(tab, idx) {
            if (tab.disabled) {
              return null;
            }

            return this.selectedIndex === idx ? 0 : -1;
          }
          /** Callback for when the focused state of a tab has changed. */

        }, {
          key: "_tabFocusChanged",
          value: function _tabFocusChanged(focusOrigin, index) {
            // Mouse/touch focus happens during the `mousedown`/`touchstart` phase which
            // can cause the tab to be moved out from under the pointer, interrupting the
            // click sequence (see #21898). We don't need to scroll the tab into view for
            // such cases anyway, because it will be done when the tab becomes selected.
            if (focusOrigin && focusOrigin !== 'mouse' && focusOrigin !== 'touch') {
              this._tabHeader.focusIndex = index;
            }
          }
        }]);

        return _MatTabGroupBase2;
      }(_MatTabGroupMixinBase);

      _MatTabGroupBase2.ɵfac = function _MatTabGroupBase_Factory(t) {
        return new (t || _MatTabGroupBase2)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_MAT_TABS_CONFIG, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE, 8));
      };

      _MatTabGroupBase2.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _MatTabGroupBase2,
        inputs: {
          headerPosition: "headerPosition",
          animationDuration: "animationDuration",
          disablePagination: "disablePagination",
          dynamicHeight: "dynamicHeight",
          contentTabIndex: "contentTabIndex",
          selectedIndex: "selectedIndex",
          backgroundColor: "backgroundColor"
        },
        outputs: {
          selectedIndexChange: "selectedIndexChange",
          focusChange: "focusChange",
          animationDone: "animationDone",
          selectedTabChange: "selectedTabChange"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      _MatTabGroupBase2.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_MAT_TABS_CONFIG]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE]
          }]
        }];
      };

      _MatTabGroupBase2.propDecorators = {
        dynamicHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        selectedIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        headerPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        animationDuration: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        contentTabIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        disablePagination: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        backgroundColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        selectedIndexChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        focusChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        animationDone: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        selectedTabChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatTabGroupBase2, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_MAT_TABS_CONFIG]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE]
            }]
          }];
        }, {
          headerPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          selectedIndexChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          focusChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          animationDone: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          selectedTabChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          animationDuration: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          disablePagination: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          dynamicHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          contentTabIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          selectedIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          backgroundColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }]
        });
      })();
      /**
       * Material design tab-group component. Supports basic tab pairs (label + content) and includes
       * animated ink-bar, keyboard navigation, and screen reader.
       * See: https://material.io/design/components/tabs.html
       */


      var _MatTabGroup = /*#__PURE__*/function (_MatTabGroupBase3) {
        _inherits(_MatTabGroup, _MatTabGroupBase3);

        var _super9 = _createSuper(_MatTabGroup);

        function _MatTabGroup(elementRef, changeDetectorRef, defaultConfig, animationMode) {
          _classCallCheck(this, _MatTabGroup);

          return _super9.call(this, elementRef, changeDetectorRef, defaultConfig, animationMode);
        }

        return _createClass(_MatTabGroup);
      }(_MatTabGroupBase2);

      _MatTabGroup.ɵfac = function MatTabGroup_Factory(t) {
        return new (t || _MatTabGroup)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_MAT_TABS_CONFIG, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE, 8));
      };

      _MatTabGroup.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _MatTabGroup,
        selectors: [["mat-tab-group"]],
        contentQueries: function MatTabGroup_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _MatTab, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._allTabs = _t);
          }
        },
        viewQuery: function MatTabGroup_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._tabBodyWrapper = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._tabHeader = _t.first);
          }
        },
        hostAttrs: [1, "mat-tab-group"],
        hostVars: 4,
        hostBindings: function MatTabGroup_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-tab-group-dynamic-height", ctx.dynamicHeight)("mat-tab-group-inverted-header", ctx.headerPosition === "below");
          }
        },
        inputs: {
          color: "color",
          disableRipple: "disableRipple"
        },
        exportAs: ["matTabGroup"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _MAT_TAB_GROUP,
          useExisting: _MatTabGroup
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 6,
        vars: 7,
        consts: [[3, "selectedIndex", "disableRipple", "disablePagination", "indexFocused", "selectFocusedIndex"], ["tabHeader", ""], ["class", "mat-tab-label mat-focus-indicator", "role", "tab", "matTabLabelWrapper", "", "mat-ripple", "", "cdkMonitorElementFocus", "", 3, "id", "mat-tab-label-active", "disabled", "matRippleDisabled", "click", "cdkFocusChange", 4, "ngFor", "ngForOf"], [1, "mat-tab-body-wrapper"], ["tabBodyWrapper", ""], ["role", "tabpanel", 3, "id", "mat-tab-body-active", "content", "position", "origin", "animationDuration", "_onCentered", "_onCentering", 4, "ngFor", "ngForOf"], ["role", "tab", "matTabLabelWrapper", "", "mat-ripple", "", "cdkMonitorElementFocus", "", 1, "mat-tab-label", "mat-focus-indicator", 3, "id", "disabled", "matRippleDisabled", "click", "cdkFocusChange"], [1, "mat-tab-label-content"], [3, "ngIf"], [3, "cdkPortalOutlet"], ["role", "tabpanel", 3, "id", "content", "position", "origin", "animationDuration", "_onCentered", "_onCentering"]],
        template: function MatTabGroup_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab-header", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("indexFocused", function MatTabGroup_Template_mat_tab_header_indexFocused_0_listener($event) {
              return ctx._focusChanged($event);
            })("selectFocusedIndex", function MatTabGroup_Template_mat_tab_header_selectFocusedIndex_0_listener($event) {
              return ctx.selectedIndex = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatTabGroup_div_2_Template, 4, 14, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MatTabGroup_mat_tab_body_5_Template, 1, 9, "mat-tab-body", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedIndex", ctx.selectedIndex || 0)("disableRipple", ctx.disableRipple)("disablePagination", ctx.disablePagination);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx._tabs);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx._tabs);
          }
        },
        directives: function directives() {
          return [_MatTabHeader, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _MatTabLabelWrapper, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatRipple, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_13__.CdkMonitorFocus, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__.CdkPortalOutlet, _MatTabBody];
        },
        styles: [".mat-tab-group{display:flex;flex-direction:column;max-width:100%}.mat-tab-group.mat-tab-group-inverted-header{flex-direction:column-reverse}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-label:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-label.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-label.mat-tab-disabled{opacity:.5}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-label{opacity:1}@media(max-width: 599px){.mat-tab-label{padding:0 12px}}@media(max-width: 959px){.mat-tab-label{padding:0 12px}}.mat-tab-group[mat-stretch-tabs]>.mat-tab-header .mat-tab-label{flex-basis:0;flex-grow:1}.mat-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-tab-body-wrapper{transition:none;animation:none}.mat-tab-body{top:0;left:0;right:0;bottom:0;position:absolute;display:block;overflow:hidden;outline:0;flex-basis:100%}.mat-tab-body.mat-tab-body-active{position:relative;overflow-x:hidden;overflow-y:auto;z-index:1;flex-grow:1}.mat-tab-group.mat-tab-group-dynamic-height .mat-tab-body.mat-tab-body-active{overflow-y:hidden}\n"],
        encapsulation: 2
      });

      _MatTabGroup.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_MAT_TABS_CONFIG]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE]
          }]
        }];
      };

      _MatTabGroup.propDecorators = {
        _allTabs: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
          args: [_MatTab, {
            descendants: true
          }]
        }],
        _tabBodyWrapper: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
          args: ['tabBodyWrapper']
        }],
        _tabHeader: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
          args: ['tabHeader']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatTabGroup, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'mat-tab-group',
            exportAs: 'matTabGroup',
            template: "<mat-tab-header #tabHeader\n               [selectedIndex]=\"selectedIndex || 0\"\n               [disableRipple]=\"disableRipple\"\n               [disablePagination]=\"disablePagination\"\n               (indexFocused)=\"_focusChanged($event)\"\n               (selectFocusedIndex)=\"selectedIndex = $event\">\n  <div class=\"mat-tab-label mat-focus-indicator\" role=\"tab\" matTabLabelWrapper mat-ripple cdkMonitorElementFocus\n       *ngFor=\"let tab of _tabs; let i = index\"\n       [id]=\"_getTabLabelId(i)\"\n       [attr.tabIndex]=\"_getTabIndex(tab, i)\"\n       [attr.aria-posinset]=\"i + 1\"\n       [attr.aria-setsize]=\"_tabs.length\"\n       [attr.aria-controls]=\"_getTabContentId(i)\"\n       [attr.aria-selected]=\"selectedIndex == i\"\n       [attr.aria-label]=\"tab.ariaLabel || null\"\n       [attr.aria-labelledby]=\"(!tab.ariaLabel && tab.ariaLabelledby) ? tab.ariaLabelledby : null\"\n       [class.mat-tab-label-active]=\"selectedIndex == i\"\n       [disabled]=\"tab.disabled\"\n       [matRippleDisabled]=\"tab.disabled || disableRipple\"\n       (click)=\"_handleClick(tab, tabHeader, i)\"\n       (cdkFocusChange)=\"_tabFocusChanged($event, i)\">\n\n\n    <div class=\"mat-tab-label-content\">\n      <!-- If there is a label template, use it. -->\n      <ng-template [ngIf]=\"tab.templateLabel\">\n        <ng-template [cdkPortalOutlet]=\"tab.templateLabel\"></ng-template>\n      </ng-template>\n\n      <!-- If there is not a label template, fall back to the text label. -->\n      <ng-template [ngIf]=\"!tab.templateLabel\">{{tab.textLabel}}</ng-template>\n    </div>\n  </div>\n</mat-tab-header>\n\n<div\n  class=\"mat-tab-body-wrapper\"\n  [class._mat-animation-noopable]=\"_animationMode === 'NoopAnimations'\"\n  #tabBodyWrapper>\n  <mat-tab-body role=\"tabpanel\"\n               *ngFor=\"let tab of _tabs; let i = index\"\n               [id]=\"_getTabContentId(i)\"\n               [attr.tabindex]=\"(contentTabIndex != null && selectedIndex === i) ? contentTabIndex : null\"\n               [attr.aria-labelledby]=\"_getTabLabelId(i)\"\n               [class.mat-tab-body-active]=\"selectedIndex === i\"\n               [content]=\"tab.content!\"\n               [position]=\"tab.position!\"\n               [origin]=\"tab.origin\"\n               [animationDuration]=\"animationDuration\"\n               (_onCentered)=\"_removeTabBodyWrapperHeight()\"\n               (_onCentering)=\"_setTabBodyWrapperHeight($event)\">\n  </mat-tab-body>\n</div>\n",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
            // tslint:disable-next-line:validate-decorators
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.Default,
            inputs: ['color', 'disableRipple'],
            providers: [{
              provide: _MAT_TAB_GROUP,
              useExisting: _MatTabGroup
            }],
            host: {
              'class': 'mat-tab-group',
              '[class.mat-tab-group-dynamic-height]': 'dynamicHeight',
              '[class.mat-tab-group-inverted-header]': 'headerPosition === "below"'
            },
            styles: [".mat-tab-group{display:flex;flex-direction:column;max-width:100%}.mat-tab-group.mat-tab-group-inverted-header{flex-direction:column-reverse}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-label:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-label.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-label.mat-tab-disabled{opacity:.5}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-label{opacity:1}@media(max-width: 599px){.mat-tab-label{padding:0 12px}}@media(max-width: 959px){.mat-tab-label{padding:0 12px}}.mat-tab-group[mat-stretch-tabs]>.mat-tab-header .mat-tab-label{flex-basis:0;flex-grow:1}.mat-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-tab-body-wrapper{transition:none;animation:none}.mat-tab-body{top:0;left:0;right:0;bottom:0;position:absolute;display:block;overflow:hidden;outline:0;flex-basis:100%}.mat-tab-body.mat-tab-body-active{position:relative;overflow-x:hidden;overflow-y:auto;z-index:1;flex-grow:1}.mat-tab-group.mat-tab-group-dynamic-height .mat-tab-body.mat-tab-body-active{overflow-y:hidden}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_MAT_TABS_CONFIG]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE]
            }]
          }];
        }, {
          _allTabs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
            args: [_MatTab, {
              descendants: true
            }]
          }],
          _tabBodyWrapper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['tabBodyWrapper']
          }],
          _tabHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['tabHeader']
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // Boilerplate for applying mixins to MatTabLabelWrapper.

      /** @docs-private */


      var _MatTabLabelWrapperBase = (0, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.mixinDisabled)( /*#__PURE__*/function () {
        function _class3() {
          _classCallCheck(this, _class3);
        }

        return _createClass(_class3);
      }());
      /**
       * Used in the `mat-tab-group` view to display tab labels.
       * @docs-private
       */


      var _MatTabLabelWrapper = /*#__PURE__*/function (_MatTabLabelWrapperBa) {
        _inherits(_MatTabLabelWrapper, _MatTabLabelWrapperBa);

        var _super10 = _createSuper(_MatTabLabelWrapper);

        function _MatTabLabelWrapper(elementRef) {
          var _this20;

          _classCallCheck(this, _MatTabLabelWrapper);

          _this20 = _super10.call(this);
          _this20.elementRef = elementRef;
          return _this20;
        }
        /** Sets focus on the wrapper element */


        _createClass(_MatTabLabelWrapper, [{
          key: "focus",
          value: function focus() {
            this.elementRef.nativeElement.focus();
          }
        }, {
          key: "getOffsetLeft",
          value: function getOffsetLeft() {
            return this.elementRef.nativeElement.offsetLeft;
          }
        }, {
          key: "getOffsetWidth",
          value: function getOffsetWidth() {
            return this.elementRef.nativeElement.offsetWidth;
          }
        }]);

        return _MatTabLabelWrapper;
      }(_MatTabLabelWrapperBase);

      _MatTabLabelWrapper.ɵfac = function MatTabLabelWrapper_Factory(t) {
        return new (t || _MatTabLabelWrapper)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
      };

      _MatTabLabelWrapper.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _MatTabLabelWrapper,
        selectors: [["", "matTabLabelWrapper", ""]],
        hostVars: 3,
        hostBindings: function MatTabLabelWrapper_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-disabled", !!ctx.disabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-tab-disabled", ctx.disabled);
          }
        },
        inputs: {
          disabled: "disabled"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      _MatTabLabelWrapper.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatTabLabelWrapper, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[matTabLabelWrapper]',
            inputs: ['disabled'],
            host: {
              '[class.mat-tab-disabled]': 'disabled',
              '[attr.aria-disabled]': '!!disabled'
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Config used to bind passive event listeners */


      var passiveEventListenerOptions = (0, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__.normalizePassiveListenerOptions)({
        passive: true
      });
      /**
       * The distance in pixels that will be overshot when scrolling a tab label into view. This helps
       * provide a small affordance to the label next to it.
       */

      var EXAGGERATED_OVERSCROLL = 60;
      /**
       * Amount of milliseconds to wait before starting to scroll the header automatically.
       * Set a little conservatively in order to handle fake events dispatched on touch devices.
       */

      var HEADER_SCROLL_DELAY = 650;
      /**
       * Interval in milliseconds at which to scroll the header
       * while the user is holding their pointer.
       */

      var HEADER_SCROLL_INTERVAL = 100;
      /**
       * Base class for a tab header that supported pagination.
       * @docs-private
       */

      var MatPaginatedTabHeader = /*#__PURE__*/function () {
        function MatPaginatedTabHeader(_elementRef, _changeDetectorRef, _viewportRuler, _dir, _ngZone, _platform, _animationMode) {
          var _this21 = this;

          _classCallCheck(this, MatPaginatedTabHeader);

          this._elementRef = _elementRef;
          this._changeDetectorRef = _changeDetectorRef;
          this._viewportRuler = _viewportRuler;
          this._dir = _dir;
          this._ngZone = _ngZone;
          this._platform = _platform;
          this._animationMode = _animationMode;
          /** The distance in pixels that the tab labels should be translated to the left. */

          this._scrollDistance = 0;
          /** Whether the header should scroll to the selected index after the view has been checked. */

          this._selectedIndexChanged = false;
          /** Emits when the component is destroyed. */

          this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
          /** Whether the controls for pagination should be displayed */

          this._showPaginationControls = false;
          /** Whether the tab list can be scrolled more towards the end of the tab label list. */

          this._disableScrollAfter = true;
          /** Whether the tab list can be scrolled more towards the beginning of the tab label list. */

          this._disableScrollBefore = true;
          /** Stream that will stop the automated scrolling. */

          this._stopScrolling = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
          /**
           * Whether pagination should be disabled. This can be used to avoid unnecessary
           * layout recalculations if it's known that pagination won't be required.
           */

          this.disablePagination = false;
          this._selectedIndex = 0;
          /** Event emitted when the option is selected. */

          this.selectFocusedIndex = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          /** Event emitted when a label is focused. */

          this.indexFocused = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(); // Bind the `mouseleave` event on the outside since it doesn't change anything in the view.

          _ngZone.runOutsideAngular(function () {
            (0, rxjs__WEBPACK_IMPORTED_MODULE_15__.fromEvent)(_elementRef.nativeElement, 'mouseleave').pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.takeUntil)(_this21._destroyed)).subscribe(function () {
              _this21._stopInterval();
            });
          });
        }
        /** The index of the active tab. */


        _createClass(MatPaginatedTabHeader, [{
          key: "selectedIndex",
          get: function get() {
            return this._selectedIndex;
          },
          set: function set(value) {
            value = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__.coerceNumberProperty)(value);

            if (this._selectedIndex != value) {
              this._selectedIndexChanged = true;
              this._selectedIndex = value;

              if (this._keyManager) {
                this._keyManager.updateActiveItem(value);
              }
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this22 = this;

            // We need to handle these events manually, because we want to bind passive event listeners.
            (0, rxjs__WEBPACK_IMPORTED_MODULE_15__.fromEvent)(this._previousPaginator.nativeElement, 'touchstart', passiveEventListenerOptions).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.takeUntil)(this._destroyed)).subscribe(function () {
              _this22._handlePaginatorPress('before');
            });
            (0, rxjs__WEBPACK_IMPORTED_MODULE_15__.fromEvent)(this._nextPaginator.nativeElement, 'touchstart', passiveEventListenerOptions).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.takeUntil)(this._destroyed)).subscribe(function () {
              _this22._handlePaginatorPress('after');
            });
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this23 = this;

            var dirChange = this._dir ? this._dir.change : (0, rxjs__WEBPACK_IMPORTED_MODULE_17__.of)('ltr');

            var resize = this._viewportRuler.change(150);

            var realign = function realign() {
              _this23.updatePagination();

              _this23._alignInkBarToSelectedTab();
            };

            this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_13__.FocusKeyManager(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap();

            this._keyManager.updateActiveItem(this._selectedIndex); // Defer the first call in order to allow for slower browsers to lay out the elements.
            // This helps in cases where the user lands directly on a page with paginated tabs.


            typeof requestAnimationFrame !== 'undefined' ? requestAnimationFrame(realign) : realign(); // On dir change or window resize, realign the ink bar and update the orientation of
            // the key manager if the direction has changed.

            (0, rxjs__WEBPACK_IMPORTED_MODULE_12__.merge)(dirChange, resize, this._items.changes).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.takeUntil)(this._destroyed)).subscribe(function () {
              // We need to defer this to give the browser some time to recalculate
              // the element dimensions. The call has to be wrapped in `NgZone.run`,
              // because the viewport change handler runs outside of Angular.
              _this23._ngZone.run(function () {
                return Promise.resolve().then(realign);
              });

              _this23._keyManager.withHorizontalOrientation(_this23._getLayoutDirection());
            }); // If there is a change in the focus key manager we need to emit the `indexFocused`
            // event in order to provide a public event that notifies about focus changes. Also we realign
            // the tabs container by scrolling the new focused tab into the visible section.

            this._keyManager.change.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.takeUntil)(this._destroyed)).subscribe(function (newFocusIndex) {
              _this23.indexFocused.emit(newFocusIndex);

              _this23._setTabFocus(newFocusIndex);
            });
          }
        }, {
          key: "ngAfterContentChecked",
          value: function ngAfterContentChecked() {
            // If the number of tab labels have changed, check if scrolling should be enabled
            if (this._tabLabelCount != this._items.length) {
              this.updatePagination();
              this._tabLabelCount = this._items.length;

              this._changeDetectorRef.markForCheck();
            } // If the selected index has changed, scroll to the label and check if the scrolling controls
            // should be disabled.


            if (this._selectedIndexChanged) {
              this._scrollToLabel(this._selectedIndex);

              this._checkScrollingControls();

              this._alignInkBarToSelectedTab();

              this._selectedIndexChanged = false;

              this._changeDetectorRef.markForCheck();
            } // If the scroll distance has been changed (tab selected, focused, scroll controls activated),
            // then translate the header to reflect this.


            if (this._scrollDistanceChanged) {
              this._updateTabScrollPosition();

              this._scrollDistanceChanged = false;

              this._changeDetectorRef.markForCheck();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._destroyed.next();

            this._destroyed.complete();

            this._stopScrolling.complete();
          }
          /** Handles keyboard events on the header. */

        }, {
          key: "_handleKeydown",
          value: function _handleKeydown(event) {
            // We don't handle any key bindings with a modifier key.
            if ((0, _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__.hasModifierKey)(event)) {
              return;
            }

            switch (event.keyCode) {
              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__.ENTER:
              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__.SPACE:
                if (this.focusIndex !== this.selectedIndex) {
                  this.selectFocusedIndex.emit(this.focusIndex);

                  this._itemSelected(event);
                }

                break;

              default:
                this._keyManager.onKeydown(event);

            }
          }
          /**
           * Callback for when the MutationObserver detects that the content has changed.
           */

        }, {
          key: "_onContentChanges",
          value: function _onContentChanges() {
            var _this24 = this;

            var textContent = this._elementRef.nativeElement.textContent; // We need to diff the text content of the header, because the MutationObserver callback
            // will fire even if the text content didn't change which is inefficient and is prone
            // to infinite loops if a poorly constructed expression is passed in (see #14249).

            if (textContent !== this._currentTextContent) {
              this._currentTextContent = textContent || ''; // The content observer runs outside the `NgZone` by default, which
              // means that we need to bring the callback back in ourselves.

              this._ngZone.run(function () {
                _this24.updatePagination();

                _this24._alignInkBarToSelectedTab();

                _this24._changeDetectorRef.markForCheck();
              });
            }
          }
          /**
           * Updates the view whether pagination should be enabled or not.
           *
           * WARNING: Calling this method can be very costly in terms of performance. It should be called
           * as infrequently as possible from outside of the Tabs component as it causes a reflow of the
           * page.
           */

        }, {
          key: "updatePagination",
          value: function updatePagination() {
            this._checkPaginationEnabled();

            this._checkScrollingControls();

            this._updateTabScrollPosition();
          }
          /** Tracks which element has focus; used for keyboard navigation */

        }, {
          key: "focusIndex",
          get: function get() {
            return this._keyManager ? this._keyManager.activeItemIndex : 0;
          }
          /** When the focus index is set, we must manually send focus to the correct label */
          ,
          set: function set(value) {
            if (!this._isValidIndex(value) || this.focusIndex === value || !this._keyManager) {
              return;
            }

            this._keyManager.setActiveItem(value);
          }
          /**
           * Determines if an index is valid.  If the tabs are not ready yet, we assume that the user is
           * providing a valid index and return true.
           */

        }, {
          key: "_isValidIndex",
          value: function _isValidIndex(index) {
            if (!this._items) {
              return true;
            }

            var tab = this._items ? this._items.toArray()[index] : null;
            return !!tab && !tab.disabled;
          }
          /**
           * Sets focus on the HTML element for the label wrapper and scrolls it into the view if
           * scrolling is enabled.
           */

        }, {
          key: "_setTabFocus",
          value: function _setTabFocus(tabIndex) {
            if (this._showPaginationControls) {
              this._scrollToLabel(tabIndex);
            }

            if (this._items && this._items.length) {
              this._items.toArray()[tabIndex].focus(); // Do not let the browser manage scrolling to focus the element, this will be handled
              // by using translation. In LTR, the scroll left should be 0. In RTL, the scroll width
              // should be the full width minus the offset width.


              var containerEl = this._tabListContainer.nativeElement;

              var dir = this._getLayoutDirection();

              if (dir == 'ltr') {
                containerEl.scrollLeft = 0;
              } else {
                containerEl.scrollLeft = containerEl.scrollWidth - containerEl.offsetWidth;
              }
            }
          }
          /** The layout direction of the containing app. */

        }, {
          key: "_getLayoutDirection",
          value: function _getLayoutDirection() {
            return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
          }
          /** Performs the CSS transformation on the tab list that will cause the list to scroll. */

        }, {
          key: "_updateTabScrollPosition",
          value: function _updateTabScrollPosition() {
            if (this.disablePagination) {
              return;
            }

            var scrollDistance = this.scrollDistance;
            var translateX = this._getLayoutDirection() === 'ltr' ? -scrollDistance : scrollDistance; // Don't use `translate3d` here because we don't want to create a new layer. A new layer
            // seems to cause flickering and overflow in Internet Explorer. For example, the ink bar
            // and ripples will exceed the boundaries of the visible tab bar.
            // See: https://github.com/angular/components/issues/10276
            // We round the `transform` here, because transforms with sub-pixel precision cause some
            // browsers to blur the content of the element.

            this._tabList.nativeElement.style.transform = "translateX(".concat(Math.round(translateX), "px)"); // Setting the `transform` on IE will change the scroll offset of the parent, causing the
            // position to be thrown off in some cases. We have to reset it ourselves to ensure that
            // it doesn't get thrown off. Note that we scope it only to IE and Edge, because messing
            // with the scroll position throws off Chrome 71+ in RTL mode (see #14689).

            if (this._platform.TRIDENT || this._platform.EDGE) {
              this._tabListContainer.nativeElement.scrollLeft = 0;
            }
          }
          /** Sets the distance in pixels that the tab header should be transformed in the X-axis. */

        }, {
          key: "scrollDistance",
          get: function get() {
            return this._scrollDistance;
          },
          set: function set(value) {
            this._scrollTo(value);
          }
          /**
           * Moves the tab list in the 'before' or 'after' direction (towards the beginning of the list or
           * the end of the list, respectively). The distance to scroll is computed to be a third of the
           * length of the tab list view window.
           *
           * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
           * should be called sparingly.
           */

        }, {
          key: "_scrollHeader",
          value: function _scrollHeader(direction) {
            var viewLength = this._tabListContainer.nativeElement.offsetWidth; // Move the scroll distance one-third the length of the tab list's viewport.

            var scrollAmount = (direction == 'before' ? -1 : 1) * viewLength / 3;
            return this._scrollTo(this._scrollDistance + scrollAmount);
          }
          /** Handles click events on the pagination arrows. */

        }, {
          key: "_handlePaginatorClick",
          value: function _handlePaginatorClick(direction) {
            this._stopInterval();

            this._scrollHeader(direction);
          }
          /**
           * Moves the tab list such that the desired tab label (marked by index) is moved into view.
           *
           * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
           * should be called sparingly.
           */

        }, {
          key: "_scrollToLabel",
          value: function _scrollToLabel(labelIndex) {
            if (this.disablePagination) {
              return;
            }

            var selectedLabel = this._items ? this._items.toArray()[labelIndex] : null;

            if (!selectedLabel) {
              return;
            } // The view length is the visible width of the tab labels.


            var viewLength = this._tabListContainer.nativeElement.offsetWidth;
            var _selectedLabel$elemen = selectedLabel.elementRef.nativeElement,
                offsetLeft = _selectedLabel$elemen.offsetLeft,
                offsetWidth = _selectedLabel$elemen.offsetWidth;
            var labelBeforePos, labelAfterPos;

            if (this._getLayoutDirection() == 'ltr') {
              labelBeforePos = offsetLeft;
              labelAfterPos = labelBeforePos + offsetWidth;
            } else {
              labelAfterPos = this._tabList.nativeElement.offsetWidth - offsetLeft;
              labelBeforePos = labelAfterPos - offsetWidth;
            }

            var beforeVisiblePos = this.scrollDistance;
            var afterVisiblePos = this.scrollDistance + viewLength;

            if (labelBeforePos < beforeVisiblePos) {
              // Scroll header to move label to the before direction
              this.scrollDistance -= beforeVisiblePos - labelBeforePos + EXAGGERATED_OVERSCROLL;
            } else if (labelAfterPos > afterVisiblePos) {
              // Scroll header to move label to the after direction
              this.scrollDistance += labelAfterPos - afterVisiblePos + EXAGGERATED_OVERSCROLL;
            }
          }
          /**
           * Evaluate whether the pagination controls should be displayed. If the scroll width of the
           * tab list is wider than the size of the header container, then the pagination controls should
           * be shown.
           *
           * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
           * should be called sparingly.
           */

        }, {
          key: "_checkPaginationEnabled",
          value: function _checkPaginationEnabled() {
            if (this.disablePagination) {
              this._showPaginationControls = false;
            } else {
              var isEnabled = this._tabList.nativeElement.scrollWidth > this._elementRef.nativeElement.offsetWidth;

              if (!isEnabled) {
                this.scrollDistance = 0;
              }

              if (isEnabled !== this._showPaginationControls) {
                this._changeDetectorRef.markForCheck();
              }

              this._showPaginationControls = isEnabled;
            }
          }
          /**
           * Evaluate whether the before and after controls should be enabled or disabled.
           * If the header is at the beginning of the list (scroll distance is equal to 0) then disable the
           * before button. If the header is at the end of the list (scroll distance is equal to the
           * maximum distance we can scroll), then disable the after button.
           *
           * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
           * should be called sparingly.
           */

        }, {
          key: "_checkScrollingControls",
          value: function _checkScrollingControls() {
            if (this.disablePagination) {
              this._disableScrollAfter = this._disableScrollBefore = true;
            } else {
              // Check if the pagination arrows should be activated.
              this._disableScrollBefore = this.scrollDistance == 0;
              this._disableScrollAfter = this.scrollDistance == this._getMaxScrollDistance();

              this._changeDetectorRef.markForCheck();
            }
          }
          /**
           * Determines what is the maximum length in pixels that can be set for the scroll distance. This
           * is equal to the difference in width between the tab list container and tab header container.
           *
           * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
           * should be called sparingly.
           */

        }, {
          key: "_getMaxScrollDistance",
          value: function _getMaxScrollDistance() {
            var lengthOfTabList = this._tabList.nativeElement.scrollWidth;
            var viewLength = this._tabListContainer.nativeElement.offsetWidth;
            return lengthOfTabList - viewLength || 0;
          }
          /** Tells the ink-bar to align itself to the current label wrapper */

        }, {
          key: "_alignInkBarToSelectedTab",
          value: function _alignInkBarToSelectedTab() {
            var selectedItem = this._items && this._items.length ? this._items.toArray()[this.selectedIndex] : null;
            var selectedLabelWrapper = selectedItem ? selectedItem.elementRef.nativeElement : null;

            if (selectedLabelWrapper) {
              this._inkBar.alignToElement(selectedLabelWrapper);
            } else {
              this._inkBar.hide();
            }
          }
          /** Stops the currently-running paginator interval.  */

        }, {
          key: "_stopInterval",
          value: function _stopInterval() {
            this._stopScrolling.next();
          }
          /**
           * Handles the user pressing down on one of the paginators.
           * Starts scrolling the header after a certain amount of time.
           * @param direction In which direction the paginator should be scrolled.
           */

        }, {
          key: "_handlePaginatorPress",
          value: function _handlePaginatorPress(direction, mouseEvent) {
            var _this25 = this;

            // Don't start auto scrolling for right mouse button clicks. Note that we shouldn't have to
            // null check the `button`, but we do it so we don't break tests that use fake events.
            if (mouseEvent && mouseEvent.button != null && mouseEvent.button !== 0) {
              return;
            } // Avoid overlapping timers.


            this._stopInterval(); // Start a timer after the delay and keep firing based on the interval.


            (0, rxjs__WEBPACK_IMPORTED_MODULE_19__.timer)(HEADER_SCROLL_DELAY, HEADER_SCROLL_INTERVAL) // Keep the timer going until something tells it to stop or the component is destroyed.
            .pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.takeUntil)((0, rxjs__WEBPACK_IMPORTED_MODULE_12__.merge)(this._stopScrolling, this._destroyed))).subscribe(function () {
              var _this25$_scrollHeader = _this25._scrollHeader(direction),
                  maxScrollDistance = _this25$_scrollHeader.maxScrollDistance,
                  distance = _this25$_scrollHeader.distance; // Stop the timer if we've reached the start or the end.


              if (distance === 0 || distance >= maxScrollDistance) {
                _this25._stopInterval();
              }
            });
          }
          /**
           * Scrolls the header to a given position.
           * @param position Position to which to scroll.
           * @returns Information on the current scroll distance and the maximum.
           */

        }, {
          key: "_scrollTo",
          value: function _scrollTo(position) {
            if (this.disablePagination) {
              return {
                maxScrollDistance: 0,
                distance: 0
              };
            }

            var maxScrollDistance = this._getMaxScrollDistance();

            this._scrollDistance = Math.max(0, Math.min(maxScrollDistance, position)); // Mark that the scroll distance has changed so that after the view is checked, the CSS
            // transformation can move the header.

            this._scrollDistanceChanged = true;

            this._checkScrollingControls();

            return {
              maxScrollDistance: maxScrollDistance,
              distance: this._scrollDistance
            };
          }
        }]);

        return MatPaginatedTabHeader;
      }();

      MatPaginatedTabHeader.ɵfac = function MatPaginatedTabHeader_Factory(t) {
        return new (t || MatPaginatedTabHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_20__.ViewportRuler), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE, 8));
      };

      MatPaginatedTabHeader.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatPaginatedTabHeader,
        inputs: {
          disablePagination: "disablePagination"
        }
      });

      MatPaginatedTabHeader.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_20__.ViewportRuler
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__.Platform
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE]
          }]
        }];
      };

      MatPaginatedTabHeader.propDecorators = {
        disablePagination: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatPaginatedTabHeader, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
          }, {
            type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_20__.ViewportRuler
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__.Platform
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE]
            }]
          }];
        }, {
          disablePagination: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Base class with all of the `MatTabHeader` functionality.
       * @docs-private
       */


      var _MatTabHeaderBase2 = /*#__PURE__*/function (_MatPaginatedTabHeade) {
        _inherits(_MatTabHeaderBase2, _MatPaginatedTabHeade);

        var _super11 = _createSuper(_MatTabHeaderBase2);

        function _MatTabHeaderBase2(elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode) {
          var _this26;

          _classCallCheck(this, _MatTabHeaderBase2);

          _this26 = _super11.call(this, elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode);
          _this26._disableRipple = false;
          return _this26;
        }
        /** Whether the ripple effect is disabled or not. */


        _createClass(_MatTabHeaderBase2, [{
          key: "disableRipple",
          get: function get() {
            return this._disableRipple;
          },
          set: function set(value) {
            this._disableRipple = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__.coerceBooleanProperty)(value);
          }
        }, {
          key: "_itemSelected",
          value: function _itemSelected(event) {
            event.preventDefault();
          }
        }]);

        return _MatTabHeaderBase2;
      }(MatPaginatedTabHeader);

      _MatTabHeaderBase2.ɵfac = function _MatTabHeaderBase_Factory(t) {
        return new (t || _MatTabHeaderBase2)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_20__.ViewportRuler), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE, 8));
      };

      _MatTabHeaderBase2.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _MatTabHeaderBase2,
        inputs: {
          disableRipple: "disableRipple"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      _MatTabHeaderBase2.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_20__.ViewportRuler
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__.Platform
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE]
          }]
        }];
      };

      _MatTabHeaderBase2.propDecorators = {
        disableRipple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatTabHeaderBase2, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
          }, {
            type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_20__.ViewportRuler
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__.Platform
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE]
            }]
          }];
        }, {
          disableRipple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }]
        });
      })();
      /**
       * The header of the tab group which displays a list of all the tabs in the tab group. Includes
       * an ink bar that follows the currently selected tab. When the tabs list's width exceeds the
       * width of the header container, then arrows will be displayed to allow the user to scroll
       * left and right across the header.
       * @docs-private
       */


      var _MatTabHeader = /*#__PURE__*/function (_MatTabHeaderBase3) {
        _inherits(_MatTabHeader, _MatTabHeaderBase3);

        var _super12 = _createSuper(_MatTabHeader);

        function _MatTabHeader(elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode) {
          _classCallCheck(this, _MatTabHeader);

          return _super12.call(this, elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode);
        }

        return _createClass(_MatTabHeader);
      }(_MatTabHeaderBase2);

      _MatTabHeader.ɵfac = function MatTabHeader_Factory(t) {
        return new (t || _MatTabHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_20__.ViewportRuler), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE, 8));
      };

      _MatTabHeader.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _MatTabHeader,
        selectors: [["mat-tab-header"]],
        contentQueries: function MatTabHeader_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _MatTabLabelWrapper, 4);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._items = _t);
          }
        },
        viewQuery: function MatTabHeader_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_MatInkBar, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c6, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c7, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c8, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._inkBar = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._tabListContainer = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._tabList = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._nextPaginator = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._previousPaginator = _t.first);
          }
        },
        hostAttrs: [1, "mat-tab-header"],
        hostVars: 4,
        hostBindings: function MatTabHeader_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-tab-header-pagination-controls-enabled", ctx._showPaginationControls)("mat-tab-header-rtl", ctx._getLayoutDirection() == "rtl");
          }
        },
        inputs: {
          selectedIndex: "selectedIndex"
        },
        outputs: {
          selectFocusedIndex: "selectFocusedIndex",
          indexFocused: "indexFocused"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c0,
        decls: 13,
        vars: 8,
        consts: [["aria-hidden", "true", "mat-ripple", "", 1, "mat-tab-header-pagination", "mat-tab-header-pagination-before", "mat-elevation-z4", 3, "matRippleDisabled", "click", "mousedown", "touchend"], ["previousPaginator", ""], [1, "mat-tab-header-pagination-chevron"], [1, "mat-tab-label-container", 3, "keydown"], ["tabListContainer", ""], ["role", "tablist", 1, "mat-tab-list", 3, "cdkObserveContent"], ["tabList", ""], [1, "mat-tab-labels"], ["aria-hidden", "true", "mat-ripple", "", 1, "mat-tab-header-pagination", "mat-tab-header-pagination-after", "mat-elevation-z4", 3, "matRippleDisabled", "mousedown", "click", "touchend"], ["nextPaginator", ""]],
        template: function MatTabHeader_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatTabHeader_Template_div_click_0_listener() {
              return ctx._handlePaginatorClick("before");
            })("mousedown", function MatTabHeader_Template_div_mousedown_0_listener($event) {
              return ctx._handlePaginatorPress("before", $event);
            })("touchend", function MatTabHeader_Template_div_touchend_0_listener() {
              return ctx._stopInterval();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function MatTabHeader_Template_div_keydown_3_listener($event) {
              return ctx._handleKeydown($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkObserveContent", function MatTabHeader_Template_div_cdkObserveContent_5_listener() {
              return ctx._onContentChanges();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "mat-ink-bar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function MatTabHeader_Template_div_mousedown_10_listener($event) {
              return ctx._handlePaginatorPress("after", $event);
            })("click", function MatTabHeader_Template_div_click_10_listener() {
              return ctx._handlePaginatorClick("after");
            })("touchend", function MatTabHeader_Template_div_touchend_10_listener() {
              return ctx._stopInterval();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-tab-header-pagination-disabled", ctx._disableScrollBefore);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleDisabled", ctx._disableScrollBefore || ctx.disableRipple);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-tab-header-pagination-disabled", ctx._disableScrollAfter);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleDisabled", ctx._disableScrollAfter || ctx.disableRipple);
          }
        },
        directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatRipple, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_21__.CdkObserveContent, _MatInkBar],
        styles: [".mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-header-pagination{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:transparent;touch-action:none}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-rtl .mat-tab-header-pagination-before,.mat-tab-header-pagination-after{padding-right:4px}.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;content:\"\";height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-ink-bar{transition:none;animation:none}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}.cdk-high-contrast-active .mat-ink-bar{outline:solid 2px;height:0}.mat-tab-labels{display:flex}[mat-align-tabs=center]>.mat-tab-header .mat-tab-labels{justify-content:center}[mat-align-tabs=end]>.mat-tab-header .mat-tab-labels{justify-content:flex-end}.mat-tab-label-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}._mat-animation-noopable.mat-tab-list{transition:none;animation:none}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-label:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-label.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-label.mat-tab-disabled{opacity:.5}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-label{opacity:1}@media(max-width: 599px){.mat-tab-label{min-width:72px}}\n"],
        encapsulation: 2
      });

      _MatTabHeader.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_20__.ViewportRuler
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__.Platform
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE]
          }]
        }];
      };

      _MatTabHeader.propDecorators = {
        _items: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
          args: [_MatTabLabelWrapper, {
            descendants: false
          }]
        }],
        _inkBar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
          args: [_MatInkBar, {
            "static": true
          }]
        }],
        _tabListContainer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
          args: ['tabListContainer', {
            "static": true
          }]
        }],
        _tabList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
          args: ['tabList', {
            "static": true
          }]
        }],
        _nextPaginator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
          args: ['nextPaginator']
        }],
        _previousPaginator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
          args: ['previousPaginator']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatTabHeader, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'mat-tab-header',
            template: "<div class=\"mat-tab-header-pagination mat-tab-header-pagination-before mat-elevation-z4\"\n     #previousPaginator\n     aria-hidden=\"true\"\n     mat-ripple [matRippleDisabled]=\"_disableScrollBefore || disableRipple\"\n     [class.mat-tab-header-pagination-disabled]=\"_disableScrollBefore\"\n     (click)=\"_handlePaginatorClick('before')\"\n     (mousedown)=\"_handlePaginatorPress('before', $event)\"\n     (touchend)=\"_stopInterval()\">\n  <div class=\"mat-tab-header-pagination-chevron\"></div>\n</div>\n\n<div class=\"mat-tab-label-container\" #tabListContainer (keydown)=\"_handleKeydown($event)\">\n  <div\n    #tabList\n    class=\"mat-tab-list\"\n    [class._mat-animation-noopable]=\"_animationMode === 'NoopAnimations'\"\n    role=\"tablist\"\n    (cdkObserveContent)=\"_onContentChanges()\">\n    <div class=\"mat-tab-labels\">\n      <ng-content></ng-content>\n    </div>\n    <mat-ink-bar></mat-ink-bar>\n  </div>\n</div>\n\n<div class=\"mat-tab-header-pagination mat-tab-header-pagination-after mat-elevation-z4\"\n     #nextPaginator\n     aria-hidden=\"true\"\n     mat-ripple [matRippleDisabled]=\"_disableScrollAfter || disableRipple\"\n     [class.mat-tab-header-pagination-disabled]=\"_disableScrollAfter\"\n     (mousedown)=\"_handlePaginatorPress('after', $event)\"\n     (click)=\"_handlePaginatorClick('after')\"\n     (touchend)=\"_stopInterval()\">\n  <div class=\"mat-tab-header-pagination-chevron\"></div>\n</div>\n",
            inputs: ['selectedIndex'],
            outputs: ['selectFocusedIndex', 'indexFocused'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
            // tslint:disable-next-line:validate-decorators
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.Default,
            host: {
              'class': 'mat-tab-header',
              '[class.mat-tab-header-pagination-controls-enabled]': '_showPaginationControls',
              '[class.mat-tab-header-rtl]': "_getLayoutDirection() == 'rtl'"
            },
            styles: [".mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-header-pagination{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:transparent;touch-action:none}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-rtl .mat-tab-header-pagination-before,.mat-tab-header-pagination-after{padding-right:4px}.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;content:\"\";height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-ink-bar{transition:none;animation:none}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}.cdk-high-contrast-active .mat-ink-bar{outline:solid 2px;height:0}.mat-tab-labels{display:flex}[mat-align-tabs=center]>.mat-tab-header .mat-tab-labels{justify-content:center}[mat-align-tabs=end]>.mat-tab-header .mat-tab-labels{justify-content:flex-end}.mat-tab-label-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}._mat-animation-noopable.mat-tab-list{transition:none;animation:none}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-label:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-label.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-label.mat-tab-disabled{opacity:.5}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-label{opacity:1}@media(max-width: 599px){.mat-tab-label{min-width:72px}}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
          }, {
            type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_20__.ViewportRuler
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__.Platform
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE]
            }]
          }];
        }, {
          _items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
            args: [_MatTabLabelWrapper, {
              descendants: false
            }]
          }],
          _inkBar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: [_MatInkBar, {
              "static": true
            }]
          }],
          _tabListContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['tabListContainer', {
              "static": true
            }]
          }],
          _tabList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['tabList', {
              "static": true
            }]
          }],
          _nextPaginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['nextPaginator']
          }],
          _previousPaginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['previousPaginator']
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Base class with all of the `MatTabNav` functionality.
       * @docs-private
       */


      var _MatTabNavBase2 = /*#__PURE__*/function (_MatPaginatedTabHeade2) {
        _inherits(_MatTabNavBase2, _MatPaginatedTabHeade2);

        var _super13 = _createSuper(_MatTabNavBase2);

        function _MatTabNavBase2(elementRef, dir, ngZone, changeDetectorRef, viewportRuler, platform, animationMode) {
          var _this27;

          _classCallCheck(this, _MatTabNavBase2);

          _this27 = _super13.call(this, elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode);
          _this27._disableRipple = false;
          /** Theme color of the nav bar. */

          _this27.color = 'primary';
          return _this27;
        }
        /** Background color of the tab nav. */


        _createClass(_MatTabNavBase2, [{
          key: "backgroundColor",
          get: function get() {
            return this._backgroundColor;
          },
          set: function set(value) {
            var classList = this._elementRef.nativeElement.classList;
            classList.remove("mat-background-".concat(this.backgroundColor));

            if (value) {
              classList.add("mat-background-".concat(value));
            }

            this._backgroundColor = value;
          }
          /** Whether the ripple effect is disabled or not. */

        }, {
          key: "disableRipple",
          get: function get() {
            return this._disableRipple;
          },
          set: function set(value) {
            this._disableRipple = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__.coerceBooleanProperty)(value);
          }
        }, {
          key: "_itemSelected",
          value: function _itemSelected() {// noop
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this28 = this;

            // We need this to run before the `changes` subscription in parent to ensure that the
            // selectedIndex is up-to-date by the time the super class starts looking for it.
            this._items.changes.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.startWith)(null), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.takeUntil)(this._destroyed)).subscribe(function () {
              _this28.updateActiveLink();
            });

            _get(_getPrototypeOf(_MatTabNavBase2.prototype), "ngAfterContentInit", this).call(this);
          }
          /** Notifies the component that the active link has been changed. */

        }, {
          key: "updateActiveLink",
          value: function updateActiveLink() {
            if (!this._items) {
              return;
            }

            var items = this._items.toArray();

            for (var i = 0; i < items.length; i++) {
              if (items[i].active) {
                this.selectedIndex = i;

                this._changeDetectorRef.markForCheck();

                return;
              }
            } // The ink bar should hide itself if no items are active.


            this.selectedIndex = -1;

            this._inkBar.hide();
          }
        }]);

        return _MatTabNavBase2;
      }(MatPaginatedTabHeader);

      _MatTabNavBase2.ɵfac = function _MatTabNavBase_Factory(t) {
        return new (t || _MatTabNavBase2)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_20__.ViewportRuler), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE, 8));
      };

      _MatTabNavBase2.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _MatTabNavBase2,
        inputs: {
          color: "color",
          backgroundColor: "backgroundColor",
          disableRipple: "disableRipple"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      _MatTabNavBase2.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_20__.ViewportRuler
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__.Platform
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE]
          }]
        }];
      };

      _MatTabNavBase2.propDecorators = {
        backgroundColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        disableRipple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatTabNavBase2, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
          }, {
            type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_20__.ViewportRuler
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__.Platform
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE]
            }]
          }];
        }, {
          color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          backgroundColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          disableRipple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }]
        });
      })();
      /**
       * Navigation component matching the styles of the tab group header.
       * Provides anchored navigation with animated ink bar.
       */


      var _MatTabNav = /*#__PURE__*/function (_MatTabNavBase3) {
        _inherits(_MatTabNav, _MatTabNavBase3);

        var _super14 = _createSuper(_MatTabNav);

        function _MatTabNav(elementRef, dir, ngZone, changeDetectorRef, viewportRuler, platform, animationMode) {
          _classCallCheck(this, _MatTabNav);

          return _super14.call(this, elementRef, dir, ngZone, changeDetectorRef, viewportRuler, platform, animationMode);
        }

        return _createClass(_MatTabNav);
      }(_MatTabNavBase2);

      _MatTabNav.ɵfac = function MatTabNav_Factory(t) {
        return new (t || _MatTabNav)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_20__.ViewportRuler), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE, 8));
      };

      _MatTabNav.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _MatTabNav,
        selectors: [["", "mat-tab-nav-bar", ""]],
        contentQueries: function MatTabNav_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _MatTabLink, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._items = _t);
          }
        },
        viewQuery: function MatTabNav_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_MatInkBar, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c6, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c7, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c8, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._inkBar = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._tabListContainer = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._tabList = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._nextPaginator = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._previousPaginator = _t.first);
          }
        },
        hostAttrs: [1, "mat-tab-nav-bar", "mat-tab-header"],
        hostVars: 10,
        hostBindings: function MatTabNav_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-tab-header-pagination-controls-enabled", ctx._showPaginationControls)("mat-tab-header-rtl", ctx._getLayoutDirection() == "rtl")("mat-primary", ctx.color !== "warn" && ctx.color !== "accent")("mat-accent", ctx.color === "accent")("mat-warn", ctx.color === "warn");
          }
        },
        inputs: {
          color: "color"
        },
        exportAs: ["matTabNavBar", "matTabNav"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        attrs: _c9,
        ngContentSelectors: _c0,
        decls: 13,
        vars: 8,
        consts: [["aria-hidden", "true", "mat-ripple", "", 1, "mat-tab-header-pagination", "mat-tab-header-pagination-before", "mat-elevation-z4", 3, "matRippleDisabled", "click", "mousedown", "touchend"], ["previousPaginator", ""], [1, "mat-tab-header-pagination-chevron"], [1, "mat-tab-link-container", 3, "keydown"], ["tabListContainer", ""], [1, "mat-tab-list", 3, "cdkObserveContent"], ["tabList", ""], [1, "mat-tab-links"], ["aria-hidden", "true", "mat-ripple", "", 1, "mat-tab-header-pagination", "mat-tab-header-pagination-after", "mat-elevation-z4", 3, "matRippleDisabled", "mousedown", "click", "touchend"], ["nextPaginator", ""]],
        template: function MatTabNav_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatTabNav_Template_div_click_0_listener() {
              return ctx._handlePaginatorClick("before");
            })("mousedown", function MatTabNav_Template_div_mousedown_0_listener($event) {
              return ctx._handlePaginatorPress("before", $event);
            })("touchend", function MatTabNav_Template_div_touchend_0_listener() {
              return ctx._stopInterval();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function MatTabNav_Template_div_keydown_3_listener($event) {
              return ctx._handleKeydown($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkObserveContent", function MatTabNav_Template_div_cdkObserveContent_5_listener() {
              return ctx._onContentChanges();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "mat-ink-bar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function MatTabNav_Template_div_mousedown_10_listener($event) {
              return ctx._handlePaginatorPress("after", $event);
            })("click", function MatTabNav_Template_div_click_10_listener() {
              return ctx._handlePaginatorClick("after");
            })("touchend", function MatTabNav_Template_div_touchend_10_listener() {
              return ctx._stopInterval();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-tab-header-pagination-disabled", ctx._disableScrollBefore);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleDisabled", ctx._disableScrollBefore || ctx.disableRipple);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-tab-header-pagination-disabled", ctx._disableScrollAfter);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleDisabled", ctx._disableScrollAfter || ctx.disableRipple);
          }
        },
        directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatRipple, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_21__.CdkObserveContent, _MatInkBar],
        styles: [".mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-header-pagination{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:transparent;touch-action:none}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-rtl .mat-tab-header-pagination-before,.mat-tab-header-pagination-after{padding-right:4px}.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;content:\"\";height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-tab-links{display:flex}[mat-align-tabs=center]>.mat-tab-link-container .mat-tab-links{justify-content:center}[mat-align-tabs=end]>.mat-tab-link-container .mat-tab-links{justify-content:flex-end}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-ink-bar{transition:none;animation:none}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}.cdk-high-contrast-active .mat-ink-bar{outline:solid 2px;height:0}.mat-tab-link-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}.mat-tab-link{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;vertical-align:top;text-decoration:none;position:relative;overflow:hidden;-webkit-tap-highlight-color:transparent}.mat-tab-link:focus{outline:none}.mat-tab-link:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-link:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-link.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-link.mat-tab-disabled{opacity:.5}.mat-tab-link .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-link{opacity:1}[mat-stretch-tabs] .mat-tab-link{flex-basis:0;flex-grow:1}.mat-tab-link.mat-tab-disabled{pointer-events:none}@media(max-width: 599px){.mat-tab-link{min-width:72px}}\n"],
        encapsulation: 2
      });

      _MatTabNav.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_20__.ViewportRuler
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__.Platform
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE]
          }]
        }];
      };

      _MatTabNav.propDecorators = {
        _items: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
          args: [(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function () {
            return _MatTabLink;
          }), {
            descendants: true
          }]
        }],
        _inkBar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
          args: [_MatInkBar, {
            "static": true
          }]
        }],
        _tabListContainer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
          args: ['tabListContainer', {
            "static": true
          }]
        }],
        _tabList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
          args: ['tabList', {
            "static": true
          }]
        }],
        _nextPaginator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
          args: ['nextPaginator']
        }],
        _previousPaginator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
          args: ['previousPaginator']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatTabNav, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: '[mat-tab-nav-bar]',
            exportAs: 'matTabNavBar, matTabNav',
            inputs: ['color'],
            template: "<div class=\"mat-tab-header-pagination mat-tab-header-pagination-before mat-elevation-z4\"\n     #previousPaginator\n     aria-hidden=\"true\"\n     mat-ripple [matRippleDisabled]=\"_disableScrollBefore || disableRipple\"\n     [class.mat-tab-header-pagination-disabled]=\"_disableScrollBefore\"\n     (click)=\"_handlePaginatorClick('before')\"\n     (mousedown)=\"_handlePaginatorPress('before', $event)\"\n     (touchend)=\"_stopInterval()\">\n  <div class=\"mat-tab-header-pagination-chevron\"></div>\n</div>\n\n<div class=\"mat-tab-link-container\" #tabListContainer (keydown)=\"_handleKeydown($event)\">\n  <div\n    class=\"mat-tab-list\"\n    [class._mat-animation-noopable]=\"_animationMode === 'NoopAnimations'\"\n    #tabList\n    (cdkObserveContent)=\"_onContentChanges()\">\n    <div class=\"mat-tab-links\">\n      <ng-content></ng-content>\n    </div>\n    <mat-ink-bar></mat-ink-bar>\n  </div>\n</div>\n\n<div class=\"mat-tab-header-pagination mat-tab-header-pagination-after mat-elevation-z4\"\n     #nextPaginator\n     aria-hidden=\"true\"\n     mat-ripple [matRippleDisabled]=\"_disableScrollAfter || disableRipple\"\n     [class.mat-tab-header-pagination-disabled]=\"_disableScrollAfter\"\n     (mousedown)=\"_handlePaginatorPress('after', $event)\"\n     (click)=\"_handlePaginatorClick('after')\"\n     (touchend)=\"_stopInterval()\">\n  <div class=\"mat-tab-header-pagination-chevron\"></div>\n</div>\n",
            host: {
              'class': 'mat-tab-nav-bar mat-tab-header',
              '[class.mat-tab-header-pagination-controls-enabled]': '_showPaginationControls',
              '[class.mat-tab-header-rtl]': "_getLayoutDirection() == 'rtl'",
              '[class.mat-primary]': 'color !== "warn" && color !== "accent"',
              '[class.mat-accent]': 'color === "accent"',
              '[class.mat-warn]': 'color === "warn"'
            },
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
            // tslint:disable-next-line:validate-decorators
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.Default,
            styles: [".mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-header-pagination{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:transparent;touch-action:none}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-rtl .mat-tab-header-pagination-before,.mat-tab-header-pagination-after{padding-right:4px}.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;content:\"\";height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-tab-links{display:flex}[mat-align-tabs=center]>.mat-tab-link-container .mat-tab-links{justify-content:center}[mat-align-tabs=end]>.mat-tab-link-container .mat-tab-links{justify-content:flex-end}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-ink-bar{transition:none;animation:none}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}.cdk-high-contrast-active .mat-ink-bar{outline:solid 2px;height:0}.mat-tab-link-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}.mat-tab-link{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;vertical-align:top;text-decoration:none;position:relative;overflow:hidden;-webkit-tap-highlight-color:transparent}.mat-tab-link:focus{outline:none}.mat-tab-link:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-link:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-link.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-link.mat-tab-disabled{opacity:.5}.mat-tab-link .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-link{opacity:1}[mat-stretch-tabs] .mat-tab-link{flex-basis:0;flex-grow:1}.mat-tab-link.mat-tab-disabled{pointer-events:none}@media(max-width: 599px){.mat-tab-link{min-width:72px}}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
          }, {
            type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_20__.ViewportRuler
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__.Platform
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE]
            }]
          }];
        }, {
          _items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
            args: [(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function () {
              return _MatTabLink;
            }), {
              descendants: true
            }]
          }],
          _inkBar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: [_MatInkBar, {
              "static": true
            }]
          }],
          _tabListContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['tabListContainer', {
              "static": true
            }]
          }],
          _tabList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['tabList', {
              "static": true
            }]
          }],
          _nextPaginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['nextPaginator']
          }],
          _previousPaginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['previousPaginator']
          }]
        });
      })(); // Boilerplate for applying mixins to MatTabLink.


      var _MatTabLinkMixinBase = (0, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.mixinTabIndex)((0, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.mixinDisableRipple)((0, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.mixinDisabled)( /*#__PURE__*/function () {
        function _class4() {
          _classCallCheck(this, _class4);
        }

        return _createClass(_class4);
      }())));
      /** Base class with all of the `MatTabLink` functionality. */


      var _MatTabLinkBase2 = /*#__PURE__*/function (_MatTabLinkMixinBase2) {
        _inherits(_MatTabLinkBase2, _MatTabLinkMixinBase2);

        var _super15 = _createSuper(_MatTabLinkBase2);

        function _MatTabLinkBase2(_tabNavBar,
        /** @docs-private */
        elementRef, globalRippleOptions, tabIndex, _focusMonitor, animationMode) {
          var _this29;

          _classCallCheck(this, _MatTabLinkBase2);

          _this29 = _super15.call(this);
          _this29._tabNavBar = _tabNavBar;
          _this29.elementRef = elementRef;
          _this29._focusMonitor = _focusMonitor;
          /** Whether the tab link is active or not. */

          _this29._isActive = false;
          _this29.rippleConfig = globalRippleOptions || {};
          _this29.tabIndex = parseInt(tabIndex) || 0;

          if (animationMode === 'NoopAnimations') {
            _this29.rippleConfig.animation = {
              enterDuration: 0,
              exitDuration: 0
            };
          }

          return _this29;
        }
        /** Whether the link is active. */


        _createClass(_MatTabLinkBase2, [{
          key: "active",
          get: function get() {
            return this._isActive;
          },
          set: function set(value) {
            var newValue = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__.coerceBooleanProperty)(value);

            if (newValue !== this._isActive) {
              this._isActive = value;

              this._tabNavBar.updateActiveLink();
            }
          }
          /**
           * Whether ripples are disabled on interaction.
           * @docs-private
           */

        }, {
          key: "rippleDisabled",
          get: function get() {
            return this.disabled || this.disableRipple || this._tabNavBar.disableRipple || !!this.rippleConfig.disabled;
          }
          /** Focuses the tab link. */

        }, {
          key: "focus",
          value: function focus() {
            this.elementRef.nativeElement.focus();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this._focusMonitor.monitor(this.elementRef);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._focusMonitor.stopMonitoring(this.elementRef);
          }
        }, {
          key: "_handleFocus",
          value: function _handleFocus() {
            // Since we allow navigation through tabbing in the nav bar, we
            // have to update the focused index whenever the link receives focus.
            this._tabNavBar.focusIndex = this._tabNavBar._items.toArray().indexOf(this);
          }
        }]);

        return _MatTabLinkBase2;
      }(_MatTabLinkMixinBase);

      _MatTabLinkBase2.ɵfac = function _MatTabLinkBase_Factory(t) {
        return new (t || _MatTabLinkBase2)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_MatTabNavBase2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MAT_RIPPLE_GLOBAL_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_13__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE, 8));
      };

      _MatTabLinkBase2.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _MatTabLinkBase2,
        inputs: {
          active: "active"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      _MatTabLinkBase2.ctorParameters = function () {
        return [{
          type: _MatTabNavBase2
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MAT_RIPPLE_GLOBAL_OPTIONS]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
            args: ['tabindex']
          }]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_13__.FocusMonitor
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE]
          }]
        }];
      };

      _MatTabLinkBase2.propDecorators = {
        active: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatTabLinkBase2, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
        }], function () {
          return [{
            type: _MatTabNavBase2
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MAT_RIPPLE_GLOBAL_OPTIONS]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
              args: ['tabindex']
            }]
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_13__.FocusMonitor
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE]
            }]
          }];
        }, {
          active: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }]
        });
      })();
      /**
       * Link inside of a `mat-tab-nav-bar`.
       */


      var _MatTabLink = /*#__PURE__*/function (_MatTabLinkBase3) {
        _inherits(_MatTabLink, _MatTabLinkBase3);

        var _super16 = _createSuper(_MatTabLink);

        function _MatTabLink(tabNavBar, elementRef, ngZone, platform, globalRippleOptions, tabIndex, focusMonitor, animationMode) {
          var _this30;

          _classCallCheck(this, _MatTabLink);

          _this30 = _super16.call(this, tabNavBar, elementRef, globalRippleOptions, tabIndex, focusMonitor, animationMode);
          _this30._tabLinkRipple = new _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.RippleRenderer(_assertThisInitialized(_this30), ngZone, elementRef, platform);

          _this30._tabLinkRipple.setupTriggerEvents(elementRef.nativeElement);

          return _this30;
        }

        _createClass(_MatTabLink, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            _get(_getPrototypeOf(_MatTabLink.prototype), "ngOnDestroy", this).call(this);

            this._tabLinkRipple._removeTriggerEvents();
          }
        }]);

        return _MatTabLink;
      }(_MatTabLinkBase2);

      _MatTabLink.ɵfac = function MatTabLink_Factory(t) {
        return new (t || _MatTabLink)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_MatTabNav), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MAT_RIPPLE_GLOBAL_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_13__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE, 8));
      };

      _MatTabLink.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _MatTabLink,
        selectors: [["", "mat-tab-link", ""], ["", "matTabLink", ""]],
        hostAttrs: [1, "mat-tab-link", "mat-focus-indicator"],
        hostVars: 7,
        hostBindings: function MatTabLink_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function MatTabLink_focus_HostBindingHandler() {
              return ctx._handleFocus();
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-current", ctx.active ? "page" : null)("aria-disabled", ctx.disabled)("tabIndex", ctx.tabIndex);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-tab-disabled", ctx.disabled)("mat-tab-label-active", ctx.active);
          }
        },
        inputs: {
          disabled: "disabled",
          disableRipple: "disableRipple",
          tabIndex: "tabIndex"
        },
        exportAs: ["matTabLink"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      _MatTabLink.ctorParameters = function () {
        return [{
          type: _MatTabNav
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__.Platform
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MAT_RIPPLE_GLOBAL_OPTIONS]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
            args: ['tabindex']
          }]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_13__.FocusMonitor
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatTabLink, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[mat-tab-link], [matTabLink]',
            exportAs: 'matTabLink',
            inputs: ['disabled', 'disableRipple', 'tabIndex'],
            host: {
              'class': 'mat-tab-link mat-focus-indicator',
              '[attr.aria-current]': 'active ? "page" : null',
              '[attr.aria-disabled]': 'disabled',
              '[attr.tabIndex]': 'tabIndex',
              '[class.mat-tab-disabled]': 'disabled',
              '[class.mat-tab-label-active]': 'active',
              '(focus)': '_handleFocus()'
            }
          }]
        }], function () {
          return [{
            type: _MatTabNav
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__.Platform
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MAT_RIPPLE_GLOBAL_OPTIONS]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
              args: ['tabindex']
            }]
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_13__.FocusMonitor
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE]
            }]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var _MatTabsModule = /*#__PURE__*/_createClass(function _MatTabsModule() {
        _classCallCheck(this, _MatTabsModule);
      });

      _MatTabsModule.ɵfac = function MatTabsModule_Factory(t) {
        return new (t || _MatTabsModule)();
      };

      _MatTabsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _MatTabsModule
      });
      _MatTabsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__.PortalModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatRippleModule, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_21__.ObserversModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_13__.A11yModule], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatTabsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__.PortalModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatRippleModule, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_21__.ObserversModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_13__.A11yModule],
            // Don't export all components because some are only to be used internally.
            exports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule, _MatTabGroup, _MatTabLabel, _MatTab, _MatTabNav, _MatTabLink, _MatTabContent],
            declarations: [_MatTabGroup, _MatTabLabel, _MatTab, _MatInkBar, _MatTabLabelWrapper, _MatTabNav, _MatTabLink, _MatTabBody, _MatTabBodyPortal, _MatTabHeader, _MatTabContent]
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_MatTabsModule, {
          declarations: function declarations() {
            return [_MatTabGroup, _MatTabLabel, _MatTab, _MatInkBar, _MatTabLabelWrapper, _MatTabNav, _MatTabLink, _MatTabBody, _MatTabBodyPortal, _MatTabHeader, _MatTabContent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__.PortalModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatRippleModule, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_21__.ObserversModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_13__.A11yModule];
          },
          exports: function exports() {
            return [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule, _MatTabGroup, _MatTabLabel, _MatTab, _MatTabNav, _MatTabLink, _MatTabContent];
          }
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=tabs.js.map

      /***/

    },

    /***/
    65327:
    /*!******************************************************!*\
      !*** ./src/app/extra-pages/blank/blank.component.ts ***!
      \******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BlankComponent": function BlankComponent() {
          return (
            /* binding */
            _BlankComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _BlankComponent = /*#__PURE__*/function () {
        function _BlankComponent() {
          _classCallCheck(this, _BlankComponent);
        }

        _createClass(_BlankComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _BlankComponent;
      }();

      _BlankComponent.ɵfac = function BlankComponent_Factory(t) {
        return new (t || _BlankComponent)();
      };

      _BlankComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _BlankComponent,
        selectors: [["app-blank"]],
        decls: 25,
        vars: 0,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/admin/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], ["href", "#", "onClick", "return false;"], [1, "breadcrumb-item", "active"], [1, "row", "clearfix"], [1, "card"], [1, "header"], [1, "body"]],
        template: function BlankComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Blank");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Extra");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Blank");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Blank Page");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibGFuay5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    27203:
    /*!***********************************************************!*\
      !*** ./src/app/extra-pages/extra-pages-routing.module.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ExtraPagesRoutingModule": function ExtraPagesRoutingModule() {
          return (
            /* binding */
            _ExtraPagesRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _blank_blank_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./blank/blank.component */
      65327);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: 'blank',
        component: _blank_blank_component__WEBPACK_IMPORTED_MODULE_0__.BlankComponent
      }];

      var _ExtraPagesRoutingModule = /*#__PURE__*/_createClass(function _ExtraPagesRoutingModule() {
        _classCallCheck(this, _ExtraPagesRoutingModule);
      });

      _ExtraPagesRoutingModule.ɵfac = function ExtraPagesRoutingModule_Factory(t) {
        return new (t || _ExtraPagesRoutingModule)();
      };

      _ExtraPagesRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _ExtraPagesRoutingModule
      });
      _ExtraPagesRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_ExtraPagesRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    95859:
    /*!***************************************************!*\
      !*** ./src/app/extra-pages/extra-pages.module.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ExtraPagesModule": function ExtraPagesModule() {
          return (
            /* binding */
            _ExtraPagesModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _extra_pages_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./extra-pages-routing.module */
      27203);
      /* harmony import */


      var _blank_blank_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./blank/blank.component */
      65327);
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/expansion */
      1562);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      98295);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      83166);
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/checkbox */
      7539);
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/tabs */
      65939);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _ExtraPagesModule = /*#__PURE__*/_createClass(function _ExtraPagesModule() {
        _classCallCheck(this, _ExtraPagesModule);
      });

      _ExtraPagesModule.ɵfac = function ExtraPagesModule_Factory(t) {
        return new (t || _ExtraPagesModule)();
      };

      _ExtraPagesModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _ExtraPagesModule
      });
      _ExtraPagesModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _extra_pages_routing_module__WEBPACK_IMPORTED_MODULE_0__.ExtraPagesRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__.MatExpansionModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__.MatCheckboxModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__.MatTabsModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_ExtraPagesModule, {
          declarations: [_blank_blank_component__WEBPACK_IMPORTED_MODULE_1__.BlankComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _extra_pages_routing_module__WEBPACK_IMPORTED_MODULE_0__.ExtraPagesRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__.MatExpansionModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__.MatCheckboxModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__.MatTabsModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_extra-pages_extra-pages_module_ts-es5.js.map
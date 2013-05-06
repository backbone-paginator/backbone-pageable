Ext.data.JsonP.Backbone_PageableCollection({
  "inheritdoc": null,
  "extends": "Backbone.Collection",
  "uses": [

  ],
  "subclasses": [

  ],
  "superclasses": [
    "Backbone.Collection"
  ],
  "component": false,
  "meta": {
  },
  "requires": [

  ],
  "mixedInto": [

  ],
  "files": [
    {
      "href": null,
      "filename": "backbone-pageable.js"
    }
  ],
  "tagname": "class",
  "enum": null,
  "html": "<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Backbone.Collection<div class='subclass '><strong>Backbone.PageableCollection</strong></div></div></pre><div class='doc-contents'><p>Drop-in replacement for Backbone.Collection. Supports server-side and\nclient-side pagination and sorting. Client-side mode also support fully\nmulti-directional synchronization of changes between pages.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-fullCollection' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backbone.PageableCollection'>Backbone.PageableCollection</span><br/></div><a href='#!/api/Backbone.PageableCollection-property-fullCollection' class='name expandable'>fullCollection</a><span> : Backbone.Collection</span></div><div class='description'><div class='short'>CLIENT MODE ONLY\n\nThis collection is the internal storage for the bootstrapped or fetched\nmodels. ...</div><div class='long'><p><strong>CLIENT MODE ONLY</strong></p>\n\n<p>This collection is the internal storage for the bootstrapped or fetched\nmodels. You can use this if you want to operate on all the pages.</p>\n</div></div></div><div id='property-mode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backbone.PageableCollection'>Backbone.PageableCollection</span><br/></div><a href='#!/api/Backbone.PageableCollection-property-mode' class='name expandable'>mode</a><span> : \"server\"|\"client\"|\"infinite\"</span></div><div class='description'><div class='short'>The mode of\noperations for this collection. ...</div><div class='long'><p>The mode of\noperations for this collection. <code>\"server\"</code> paginates on the server-side,\n<code>\"client\"</code> paginates on the client-side and <code>\"infinite\"</code> paginates on the\nserver-side for APIs that do not support <code>totalRecords</code>.</p>\n<p>Defaults to: <code>&quot;server&quot;</code></p></div></div></div><div id='property-queryParams' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backbone.PageableCollection'>Backbone.PageableCollection</span><br/></div><a href='#!/api/Backbone.PageableCollection-property-queryParams' class='name expandable'>queryParams</a><span> : Object</span></div><div class='description'><div class='short'>A translation map to convert Backbone.PageableCollection state attributes\nto the query parameters accepted by your se...</div><div class='long'><p>A translation map to convert <a href=\"#!/api/Backbone.PageableCollection\" rel=\"Backbone.PageableCollection\" class=\"docClass\">Backbone.PageableCollection</a> state attributes\nto the query parameters accepted by your server API.</p>\n\n<p>You can override the default state by extending this class or specifying\nthem in <code>options.queryParams</code> object hash to the constructor.</p>\n<p>Defaults to: <code>{currentPage: &quot;page&quot;, pageSize: &quot;per_page&quot;, totalPages: &quot;total_pages&quot;, totalRecords: &quot;total_entries&quot;, sortKey: &quot;sort_by&quot;, order: &quot;order&quot;, directions: {&quot;-1&quot;: &quot;asc&quot;, &quot;1&quot;: &quot;desc&quot;}}</code></p><ul><li><span class='pre'>currentPage</span> : string (optional)<div class='sub-desc'><p>Defaults to: <code>&quot;page&quot;</code></p></div></li><li><span class='pre'>pageSize</span> : string (optional)<div class='sub-desc'><p>Defaults to: <code>&quot;per_page&quot;</code></p></div></li><li><span class='pre'>totalPages</span> : string (optional)<div class='sub-desc'><p>Defaults to: <code>&quot;total_pages&quot;</code></p></div></li><li><span class='pre'>totalRecords</span> : string (optional)<div class='sub-desc'><p>Defaults to: <code>&quot;total_entries&quot;</code></p></div></li><li><span class='pre'>sortKey</span> : string (optional)<div class='sub-desc'><p>Defaults to: <code>&quot;sort_by&quot;</code></p></div></li><li><span class='pre'>order</span> : string (optional)<div class='sub-desc'><p>Defaults to: <code>&quot;order&quot;</code></p></div></li><li><span class='pre'>directions</span> : string (optional)<div class='sub-desc'><p>A\nmap for translating a <a href=\"#!/api/Backbone.PageableCollection-property-state\" rel=\"Backbone.PageableCollection-property-state\" class=\"docClass\">Backbone.PageableCollection.state</a>.order constant to\nthe ones your server API accepts.</p>\n<p>Defaults to: <code>{&quot;-1&quot;: &quot;asc&quot;, &quot;1&quot;: &quot;desc&quot;}</code></p></div></li></ul></div></div></div><div id='property-state' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backbone.PageableCollection'>Backbone.PageableCollection</span><br/></div><a href='#!/api/Backbone.PageableCollection-property-state' class='name expandable'>state</a><span> : Object</span></div><div class='description'><div class='short'>The container object to store all pagination states. ...</div><div class='long'><p>The container object to store all pagination states.</p>\n\n<p>You can override the default state by extending this class or specifying\nthem in an <code>options</code> hash to the constructor.</p>\n<ul><li><span class='pre'>firstPage</span> : 0|1 (optional)<div class='sub-desc'><p>The first page index. Set to 0 if\nyour server API uses 0-based indices. You should only override this value\nduring extension, initialization or reset by the server after\nfetching. This value should be read only at other times.</p>\n<p>Defaults to: <code>1</code></p></div></li><li><span class='pre'>lastPage</span> : number (optional)<div class='sub-desc'><p>The last page index. This value\nis <strong>read only</strong> and it's calculated based on whether <code>firstPage</code> is 0 or\n1, during bootstrapping, fetching and resetting. Please don't change this\nvalue under any circumstances.</p>\n<p>Defaults to: <code>null</code></p></div></li><li><span class='pre'>currentPage</span> : number (optional)<div class='sub-desc'><p>The current page index. You\nshould only override this value during extension, initialization or reset\nby the server after fetching. This value should be read only at other\ntimes. Can be a 0-based or 1-based index, depending on whether\n<code>firstPage</code> is 0 or 1. If left as default, it will be set to <code>firstPage</code>\non initialization.</p>\n<p>Defaults to: <code>null</code></p></div></li><li><span class='pre'>pageSize</span> : number (optional)<div class='sub-desc'><p>How many records to show per\npage. This value is <strong>read only</strong> after initialization, if you want to\nchange the page size after initialization, you must call <a href=\"#!/api/Backbone.PageableCollection-method-setPageSize\" rel=\"Backbone.PageableCollection-method-setPageSize\" class=\"docClass\">setPageSize</a>.</p>\n<p>Defaults to: <code>25</code></p></div></li><li><span class='pre'>totalPages</span> : number (optional)<div class='sub-desc'><p>How many pages there are. This\nvalue is <strong>read only</strong> and it is calculated from <code>totalRecords</code>.</p>\n<p>Defaults to: <code>null</code></p></div></li><li><span class='pre'>totalRecords</span> : number (optional)<div class='sub-desc'><p>How many records there\nare. This value is <strong>required</strong> under server mode. This value is optional\nfor client mode as the number will be the same as the number of models\nduring bootstrapping and during fetching, either supplied by the server\nin the metadata, or calculated from the size of the response.</p>\n<p>Defaults to: <code>null</code></p></div></li><li><span class='pre'>sortKey</span> : string (optional)<div class='sub-desc'><p>The model attribute to use for\nsorting.</p>\n<p>Defaults to: <code>null</code></p></div></li><li><span class='pre'>order</span> : -1|0|1 (optional)<div class='sub-desc'><p>The order to use for sorting. Specify\n-1 for ascending order or 1 for descending order. If 0, no client side\nsorting will be done and the order query parameter will not be sent to\nthe server during a fetch.</p>\n<p>Defaults to: <code>-1</code></p></div></li></ul></div></div></div></div></div><div class='members-section'><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Instance Methods</h3><div id='method-_checkState' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backbone.PageableCollection'>Backbone.PageableCollection</span><br/></div><a href='#!/api/Backbone.PageableCollection-method-_checkState' class='name expandable'>_checkState</a>( <span class='pre'>state</span> ) : Object<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Sanity check this collection's pagination states. ...</div><div class='long'><p>Sanity check this collection's pagination states. Only perform checks\nwhen all the required pagination state values are defined and not null.\nIf <code>totalPages</code> is undefined or null, it is set to <code>totalRecords</code> /\n<code>pageSize</code>. <code>lastPage</code> is set according to whether <code>firstPage</code> is 0 or 1\nwhen no error occurs.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>state</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>Returns the <code>state</code> object if no error was found.</p>\n</div></li></ul><h3 class='pa'>Throws</h3><ul><li><span class='pre'>TypeError</span><div class='sub-desc'><p>If <code>totalRecords</code>, <code>pageSize</code>, <code>currentPage</code> or\n<code>firstPage</code> is not a finite integer.</p>\n</div></li><li><span class='pre'>RangeError</span><div class='sub-desc'><p>If <code>pageSize</code>, <code>currentPage</code> or <code>firstPage</code> is out\nof bounds.</p>\n</div></li></ul></div></div></div><div id='method-_makeCollectionEventHandler' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backbone.PageableCollection'>Backbone.PageableCollection</span><br/></div><a href='#!/api/Backbone.PageableCollection-method-_makeCollectionEventHandler' class='name expandable'>_makeCollectionEventHandler</a>( <span class='pre'>pageCol, fullCol</span> ) : function(string, Backbone.Model, Backbone.Collection, Object)<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Factory method that returns a Backbone event handler that responses to\nthe add, remove, reset, and the sort events. ...</div><div class='long'><p>Factory method that returns a Backbone event handler that responses to\nthe <code>add</code>, <code>remove</code>, <code>reset</code>, and the <code>sort</code> events. The returned event\nhandler will synchronize the current page collection and the full\ncollection's models.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>pageCol</span> : <a href=\"#!/api/Backbone.PageableCollection\" rel=\"Backbone.PageableCollection\" class=\"docClass\">Backbone.PageableCollection</a><div class='sub-desc'>\n</div></li><li><span class='pre'>fullCol</span> : Backbone.Collection<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>function(string, Backbone.Model, Backbone.Collection, Object)</span><div class='sub-desc'><p>Collection event handler</p>\n</div></li></ul></div></div></div><div id='method-_makeComparator' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backbone.PageableCollection'>Backbone.PageableCollection</span><br/></div><a href='#!/api/Backbone.PageableCollection-method-_makeComparator' class='name expandable'>_makeComparator</a>( <span class='pre'>[sortKey], [order]</span> )<strong class='protected signature' >protected</strong></div><div class='description'><div class='short'>Convenient method for making a comparator sorted by a model attribute\nidentified by sortKey and ordered by order. ...</div><div class='long'><p>Convenient method for making a <code>comparator</code> sorted by a model attribute\nidentified by <code>sortKey</code> and ordered by <code>order</code>.</p>\n\n<p>Like a Backbone.Collection, a <a href=\"#!/api/Backbone.PageableCollection\" rel=\"Backbone.PageableCollection\" class=\"docClass\">Backbone.PageableCollection</a> will maintain\nthe <strong>current page</strong> in sorted order on the client side if a <code>comparator</code>\nis attached to it. If the collection is in client mode, you can attach a\ncomparator to <a href=\"#!/api/Backbone.PageableCollection-property-fullCollection\" rel=\"Backbone.PageableCollection-property-fullCollection\" class=\"docClass\">fullCollection</a> to have all the pages reflect the global\nsorting order by specifying an option <code>full</code> to <code>true</code>. You <strong>must</strong> call\n<code>sort</code> manually or <a href=\"#!/api/Backbone.PageableCollection-property-fullCollection\" rel=\"Backbone.PageableCollection-property-fullCollection\" class=\"docClass\">fullCollection</a>.sort after calling this method to\nforce a resort.</p>\n\n<p>While you can use this method to sort the current page in server mode,\nthe sorting order may not reflect the global sorting order due to the\nadditions or removals of the records on the server since the last\nfetch. If you want the most updated page in a global sorting order, it is\nrecommended that you set <a href=\"#!/api/Backbone.PageableCollection-property-state\" rel=\"Backbone.PageableCollection-property-state\" class=\"docClass\">state</a>.sortKey and optionally <a href=\"#!/api/Backbone.PageableCollection-property-state\" rel=\"Backbone.PageableCollection-property-state\" class=\"docClass\">state</a>.order, and\nthen call <a href=\"#!/api/Backbone.PageableCollection-method-fetch\" rel=\"Backbone.PageableCollection-method-fetch\" class=\"docClass\">fetch</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>sortKey</span> : string (optional)<div class='sub-desc'><p>See <code>state.sortKey</code>.</p>\n<p>Defaults to: <code>this.state.sortKey</code></p></div></li><li><span class='pre'>order</span> : number (optional)<div class='sub-desc'><p>See <code>state.order</code>.</p>\n\n<p>See <a href=\"http://backbonejs.org/#Collection-comparator\">Backbone.Collection.comparator</a>.</p>\n<p>Defaults to: <code>this.state.order</code></p></div></li></ul></div></div></div><div id='method-_makeFullCollection' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backbone.PageableCollection'>Backbone.PageableCollection</span><br/></div><a href='#!/api/Backbone.PageableCollection-method-_makeFullCollection' class='name expandable'>_makeFullCollection</a>( <span class='pre'>models, options</span> ) : Backbone.Collection<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Makes a Backbone.Collection that contains all the pages. ...</div><div class='long'><p>Makes a Backbone.Collection that contains all the pages.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>models</span> : Array.&lt;Object|Backbone.Model&gt;<div class='sub-desc'>\n</div></li><li><span class='pre'>options</span> : Object<div class='sub-desc'><p>Options for Backbone.Collection constructor.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Backbone.Collection</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-fetch' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backbone.PageableCollection'>Backbone.PageableCollection</span><br/></div><a href='#!/api/Backbone.PageableCollection-method-fetch' class='name expandable'>fetch</a>( <span class='pre'>[options]</span> ) : XMLHttpRequest</div><div class='description'><div class='short'>Fetch a page from the server in server mode, or all the pages in client\nmode. ...</div><div class='long'><p>Fetch a page from the server in server mode, or all the pages in client\nmode. Under infinite mode, the current page is refetched by default and\nthen reset.</p>\n\n<p>The query string is constructed by translating the current pagination\nstate to your server API query parameter using <a href=\"#!/api/Backbone.PageableCollection-property-queryParams\" rel=\"Backbone.PageableCollection-property-queryParams\" class=\"docClass\">queryParams</a>.  The current\npage will reset after fetch.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : Object (optional)<div class='sub-desc'><p>Accepts all\n<a href=\"http://backbonejs.org/#Collection-fetch\">Backbone.Collection#fetch</a>\noptions.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>XMLHttpRequest</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getFirstPage' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backbone.PageableCollection'>Backbone.PageableCollection</span><br/></div><a href='#!/api/Backbone.PageableCollection-method-getFirstPage' class='name expandable'>getFirstPage</a>( <span class='pre'>options</span> ) : XMLHttpRequest|<a href=\"#!/api/Backbone.PageableCollection\" rel=\"Backbone.PageableCollection\" class=\"docClass\">Backbone.PageableCollection</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Fetch the first page in server mode, or reset the current page of this\ncollection to the first page in client or infi...</div><div class='long'><p>Fetch the first page in server mode, or reset the current page of this\ncollection to the first page in client or infinite mode.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : Object<div class='sub-desc'><p><a href=\"#!/api/Backbone.PageableCollection-method-getPage\" rel=\"Backbone.PageableCollection-method-getPage\" class=\"docClass\">getPage</a> options.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>XMLHttpRequest|<a href=\"#!/api/Backbone.PageableCollection\" rel=\"Backbone.PageableCollection\" class=\"docClass\">Backbone.PageableCollection</a></span><div class='sub-desc'><p>The XMLHttpRequest\nfrom fetch or this.</p>\n</div></li></ul></div></div></div><div id='method-getLastPage' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backbone.PageableCollection'>Backbone.PageableCollection</span><br/></div><a href='#!/api/Backbone.PageableCollection-method-getLastPage' class='name expandable'>getLastPage</a>( <span class='pre'>options</span> ) : XMLHttpRequest|<a href=\"#!/api/Backbone.PageableCollection\" rel=\"Backbone.PageableCollection\" class=\"docClass\">Backbone.PageableCollection</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Fetch the last page in server mode, or reset the current page of this\ncollection to the last page in client mode. ...</div><div class='long'><p>Fetch the last page in server mode, or reset the current page of this\ncollection to the last page in client mode.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : Object<div class='sub-desc'><p><a href=\"#!/api/Backbone.PageableCollection-method-getPage\" rel=\"Backbone.PageableCollection-method-getPage\" class=\"docClass\">getPage</a> options.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>XMLHttpRequest|<a href=\"#!/api/Backbone.PageableCollection\" rel=\"Backbone.PageableCollection\" class=\"docClass\">Backbone.PageableCollection</a></span><div class='sub-desc'><p>The XMLHttpRequest\nfrom fetch or this.</p>\n</div></li></ul></div></div></div><div id='method-getNextPage' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backbone.PageableCollection'>Backbone.PageableCollection</span><br/></div><a href='#!/api/Backbone.PageableCollection-method-getNextPage' class='name expandable'>getNextPage</a>( <span class='pre'>options</span> ) : XMLHttpRequest|<a href=\"#!/api/Backbone.PageableCollection\" rel=\"Backbone.PageableCollection\" class=\"docClass\">Backbone.PageableCollection</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Fetch the next page in server mode, or reset the current page of this\ncollection to the next page in client mode. ...</div><div class='long'><p>Fetch the next page in server mode, or reset the current page of this\ncollection to the next page in client mode.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : Object<div class='sub-desc'><p><a href=\"#!/api/Backbone.PageableCollection-method-getPage\" rel=\"Backbone.PageableCollection-method-getPage\" class=\"docClass\">getPage</a> options.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>XMLHttpRequest|<a href=\"#!/api/Backbone.PageableCollection\" rel=\"Backbone.PageableCollection\" class=\"docClass\">Backbone.PageableCollection</a></span><div class='sub-desc'><p>The XMLHttpRequest\nfrom fetch or this.</p>\n</div></li></ul></div></div></div><div id='method-getPage' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backbone.PageableCollection'>Backbone.PageableCollection</span><br/></div><a href='#!/api/Backbone.PageableCollection-method-getPage' class='name expandable'>getPage</a>( <span class='pre'>index, [options]</span> ) : XMLHttpRequest|<a href=\"#!/api/Backbone.PageableCollection\" rel=\"Backbone.PageableCollection\" class=\"docClass\">Backbone.PageableCollection</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Given a page index, set state.currentPage to that index. ...</div><div class='long'><p>Given a page index, set <a href=\"#!/api/Backbone.PageableCollection-property-state\" rel=\"Backbone.PageableCollection-property-state\" class=\"docClass\">state</a>.currentPage to that index. If this\ncollection is in server mode, fetch the page using the updated state,\notherwise, reset the current page of this collection to the page\nspecified by <code>index</code> in client mode. If <code>options.fetch</code> is true, a fetch\ncan be forced in client mode before resetting the current page. Under\ninfinite mode, if the index is less than the current page, a reset is\ndone as in client mode. If the index is greater than the current page\nnumber, a fetch is made with the results <strong>appended</strong> to</p>\n\n<h1>fullCollection. The current page will then be reset after fetching.</h1>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>index</span> : number|string<div class='sub-desc'><p>The page index to go to, or the page name to\nlook up from #links in infinite mode.</p>\n</div></li><li><span class='pre'>options</span> : Object (optional)<div class='sub-desc'><p><a href=\"#!/api/Backbone.PageableCollection-method-fetch\" rel=\"Backbone.PageableCollection-method-fetch\" class=\"docClass\">fetch</a> options or\n<a href=\"http://backbonejs.org/#Collection-reset\">reset</a> options for client mode\nwhen <code>options.fetch</code> is <code>false</code>.</p>\n<ul><li><span class='pre'>fetch</span> : boolean (optional)<div class='sub-desc'><p>If true, force a <a href=\"#!/api/Backbone.PageableCollection-method-fetch\" rel=\"Backbone.PageableCollection-method-fetch\" class=\"docClass\">fetch</a> in\nclient mode.</p>\n<p>Defaults to: <code>false</code></p></div></li></ul></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>XMLHttpRequest|<a href=\"#!/api/Backbone.PageableCollection\" rel=\"Backbone.PageableCollection\" class=\"docClass\">Backbone.PageableCollection</a></span><div class='sub-desc'><p>The XMLHttpRequest\nfrom fetch or this.</p>\n</div></li></ul><h3 class='pa'>Throws</h3><ul><li><span class='pre'>TypeError</span><div class='sub-desc'><p>If <code>index</code> is not a finite integer under server or\nclient mode, or does not yield a URL from #links under infinite mode.</p>\n</div></li><li><span class='pre'>RangeError</span><div class='sub-desc'><p>If <code>index</code> is out of bounds.</p>\n</div></li></ul></div></div></div><div id='method-getPageByOffset' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backbone.PageableCollection'>Backbone.PageableCollection</span><br/></div><a href='#!/api/Backbone.PageableCollection-method-getPageByOffset' class='name expandable'>getPageByOffset</a>( <span class='pre'>options</span> ) : XMLHttpRequest|<a href=\"#!/api/Backbone.PageableCollection\" rel=\"Backbone.PageableCollection\" class=\"docClass\">Backbone.PageableCollection</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Fetch the page for the provided item offset in server mode, or reset the current page of this\ncollection to the page ...</div><div class='long'><p>Fetch the page for the provided item offset in server mode, or reset the current page of this\ncollection to the page for the provided item offset in client mode.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : Object<div class='sub-desc'><p><a href=\"#!/api/Backbone.PageableCollection-method-getPage\" rel=\"Backbone.PageableCollection-method-getPage\" class=\"docClass\">getPage</a> options.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>XMLHttpRequest|<a href=\"#!/api/Backbone.PageableCollection\" rel=\"Backbone.PageableCollection\" class=\"docClass\">Backbone.PageableCollection</a></span><div class='sub-desc'><p>The XMLHttpRequest\nfrom fetch or this.</p>\n</div></li></ul></div></div></div><div id='method-getPreviousPage' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backbone.PageableCollection'>Backbone.PageableCollection</span><br/></div><a href='#!/api/Backbone.PageableCollection-method-getPreviousPage' class='name expandable'>getPreviousPage</a>( <span class='pre'>options</span> ) : XMLHttpRequest|<a href=\"#!/api/Backbone.PageableCollection\" rel=\"Backbone.PageableCollection\" class=\"docClass\">Backbone.PageableCollection</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Fetch the previous page in server mode, or reset the current page of this\ncollection to the previous page in client o...</div><div class='long'><p>Fetch the previous page in server mode, or reset the current page of this\ncollection to the previous page in client or infinite mode.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : Object<div class='sub-desc'><p><a href=\"#!/api/Backbone.PageableCollection-method-getPage\" rel=\"Backbone.PageableCollection-method-getPage\" class=\"docClass\">getPage</a> options.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>XMLHttpRequest|<a href=\"#!/api/Backbone.PageableCollection\" rel=\"Backbone.PageableCollection\" class=\"docClass\">Backbone.PageableCollection</a></span><div class='sub-desc'><p>The XMLHttpRequest\nfrom fetch or this.</p>\n</div></li></ul></div></div></div><div id='method-hasNext' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backbone.PageableCollection'>Backbone.PageableCollection</span><br/></div><a href='#!/api/Backbone.PageableCollection-method-hasNext' class='name expandable'>hasNext</a>( <span class='pre'></span> ) : boolean</div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>boolean</span><div class='sub-desc'><p><code>true</code> if this collection can page forward, <code>false</code>\notherwise.</p>\n</div></li></ul></div></div></div><div id='method-hasPrevious' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backbone.PageableCollection'>Backbone.PageableCollection</span><br/></div><a href='#!/api/Backbone.PageableCollection-method-hasPrevious' class='name expandable'>hasPrevious</a>( <span class='pre'></span> ) : boolean</div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>boolean</span><div class='sub-desc'><p><code>true</code> if this collection can page backward, <code>false</code>\notherwise.</p>\n</div></li></ul></div></div></div><div id='method-initialize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backbone.PageableCollection'>Backbone.PageableCollection</span><br/></div><a href='#!/api/Backbone.PageableCollection-method-initialize' class='name expandable'>initialize</a>( <span class='pre'>[models], [options]</span> )</div><div class='description'><div class='short'>Given a list of models or model attributues, bootstraps the full\ncollection in client mode or infinite mode, or just ...</div><div class='long'><p>Given a list of models or model attributues, bootstraps the full\ncollection in client mode or infinite mode, or just the page you want in\nserver mode.</p>\n\n<p>If you want to initialize a collection to a different state than the\ndefault, you can specify them in <code>options.state</code>. Any state parameters\nsupplied will be merged with the default. If you want to change the\ndefault mapping from <a href=\"#!/api/Backbone.PageableCollection-property-state\" rel=\"Backbone.PageableCollection-property-state\" class=\"docClass\">state</a> keys to your server API's query parameter\nnames, you can specifiy an object hash in <code>option.queryParams</code>. Likewise,\nany mapping provided will be merged with the default. Lastly, all\nBackbone.Collection constructor options are also accepted.</p>\n\n<p>See:</p>\n\n<ul>\n<li><a href=\"#!/api/Backbone.PageableCollection-property-state\" rel=\"Backbone.PageableCollection-property-state\" class=\"docClass\">Backbone.PageableCollection.state</a></li>\n<li><a href=\"#!/api/Backbone.PageableCollection-property-queryParams\" rel=\"Backbone.PageableCollection-property-queryParams\" class=\"docClass\">Backbone.PageableCollection.queryParams</a></li>\n<li><a href=\"http://backbonejs.org/#Collection-constructor\">Backbone.Collection#initialize</a></li>\n</ul>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>models</span> : Array.&lt;Object&gt; (optional)<div class='sub-desc'>\n</div></li><li><span class='pre'>options</span> : Object (optional)<div class='sub-desc'>\n<ul><li><span class='pre'>comparator</span> : function(*, *): number (optional)<div class='sub-desc'><p>If specified, this\ncomparator is set to the current page under server mode, or the</p>\n\n<h1>fullCollection otherwise.</h1>\n</div></li><li><span class='pre'>full</span> : boolean (optional)<div class='sub-desc'><p>If <code>false</code> and either a\n<code>options.comparator</code> or <code>sortKey</code> is defined, the comparator is attached\nto the current page. Default is <code>true</code> under client or infinite mode and\nthe comparator will be attached to the <a href=\"#!/api/Backbone.PageableCollection-property-fullCollection\" rel=\"Backbone.PageableCollection-property-fullCollection\" class=\"docClass\">fullCollection</a>.</p>\n</div></li><li><span class='pre'>state</span> : Object (optional)<div class='sub-desc'><p>The state attributes overriding the defaults.</p>\n<ul><li><span class='pre'>sortKey</span> : string (optional)<div class='sub-desc'><p>The model attribute to use for\nsorting. If specified instead of <code>options.comparator</code>, a comparator will\nbe automatically created using this value, and optionally a sorting order\nspecified in <code>options.state.order</code>. The comparator is then attached to\nthe new collection instance.</p>\n</div></li><li><span class='pre'>order</span> : -1|1 (optional)<div class='sub-desc'><p>The order to use for sorting. Specify\n-1 for ascending order and 1 for descending order.</p>\n</div></li></ul></div></li><li><span class='pre'>queryParam</span> : Object (optional)<div class='sub-desc'></div></li></ul></div></li></ul></div></div></div><div id='method-parse' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backbone.PageableCollection'>Backbone.PageableCollection</span><br/></div><a href='#!/api/Backbone.PageableCollection-method-parse' class='name expandable'>parse</a>( <span class='pre'>resp</span> )</div><div class='description'><div class='short'>Parse server response data. ...</div><div class='long'><p>Parse server response data.</p>\n\n<p>This default implementation assumes the response data is in one of two\nstructures:</p>\n\n<pre><code>[\n  {}, // Your new pagination state\n  [{}, ...] // An array of JSON objects\n]\n</code></pre>\n\n<p>Or,</p>\n\n<pre><code>[{}] // An array of JSON objects\n</code></pre>\n\n<p>The first structure is the preferred form because the pagination states\nmay have been updated on the server side, sending them down again allows\nthis collection to update its states. If the response has a pagination\nstate object, it is checked for errors.</p>\n\n<p>The second structure is the\n<a href=\"http://backbonejs.org/#Collection-parse\">Backbone.Collection#parse</a>\ndefault.</p>\n\n<p>*Note:** this method has been further simplified since 1.1.7. While</p>\n\n<pre><code>   existing <a href=\"#!/api/Backbone.PageableCollection-method-parse\" rel=\"Backbone.PageableCollection-method-parse\" class=\"docClass\">parse</a> implementations will continue to work, new code is\n   encouraged to override <a href=\"#!/api/Backbone.PageableCollection-method-parseState\" rel=\"Backbone.PageableCollection-method-parseState\" class=\"docClass\">parseState</a> and <a href=\"#!/api/Backbone.PageableCollection-method-parseRecords\" rel=\"Backbone.PageableCollection-method-parseRecords\" class=\"docClass\">parseRecords</a> instead.\n\n   @param {Object} resp The deserialized response data from the server.\n\n   @return {Array.&lt;Object&gt;} An array of model objects\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>resp</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-parseLinks' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backbone.PageableCollection'>Backbone.PageableCollection</span><br/></div><a href='#!/api/Backbone.PageableCollection-method-parseLinks' class='name expandable'>parseLinks</a>( <span class='pre'>resp, [options]</span> ) : Object</div><div class='description'><div class='short'>Parse pagination links from the server response. ...</div><div class='long'><p>Parse pagination links from the server response. Only valid under\ninfinite mode.</p>\n\n<p>Given a response body and a XMLHttpRequest object, extract pagination\nlinks from them for infinite paging.</p>\n\n<p>This default implementation parses the RFC 5988 <code>Link</code> header and extract\n3 links from it - <code>first</code>, <code>prev</code>, <code>next</code>. If a <code>previous</code> link is found,\nit will be found in the <code>prev</code> key in the returned object hash. Any\nsubclasses overriding this method <strong>must</strong> return an object hash having\nonly the keys above. If <code>first</code> is missing, the collection's default URL\nis assumed to be the <code>first</code> URL. If <code>prev</code> or <code>next</code> is missing, it is\nassumed to be <code>null</code>. An empty object hash must be returned if there are\nno links found. If either the response or the header contains information\npertaining to the total number of records on the server,</p>\n\n<h1>state.totalRecords must be set to that number. The default</h1>\n\n<p>implementation uses the <code>last</code> link from the header to calculate it.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>resp</span> : *<div class='sub-desc'><p>The deserialized response body.</p>\n</div></li><li><span class='pre'>options</span> : Object (optional)<div class='sub-desc'>\n<ul><li><span class='pre'>xhr</span> : XMLHttpRequest (optional)<div class='sub-desc'><p>The XMLHttpRequest object for this\nresponse.</p>\n</div></li></ul></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-parseRecords' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backbone.PageableCollection'>Backbone.PageableCollection</span><br/></div><a href='#!/api/Backbone.PageableCollection-method-parseRecords' class='name expandable'>parseRecords</a>( <span class='pre'>resp</span> ) : Array.&lt;Object&gt;</div><div class='description'><div class='short'>Parse server response for an array of model objects. ...</div><div class='long'><p>Parse server response for an array of model objects.</p>\n\n<p>This default implementation first checks whether the response has any\nstate object as documented in <a href=\"#!/api/Backbone.PageableCollection-method-parse\" rel=\"Backbone.PageableCollection-method-parse\" class=\"docClass\">parse</a>. If it exists, the array of model\nobjects is assumed to be the second element, otherwise the entire\nresponse is returned directly.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>resp</span> : Object<div class='sub-desc'><p>The deserialized response data from the server.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array.&lt;Object&gt;</span><div class='sub-desc'><p>An array of model objects</p>\n</div></li></ul></div></div></div><div id='method-parseState' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backbone.PageableCollection'>Backbone.PageableCollection</span><br/></div><a href='#!/api/Backbone.PageableCollection-method-parseState' class='name expandable'>parseState</a>( <span class='pre'>resp, queryParams, state</span> ) : Object</div><div class='description'><div class='short'>Parse server response for server pagination state updates. ...</div><div class='long'><p>Parse server response for server pagination state updates.</p>\n\n<p>This default implementation first checks whether the response has any\nstate object as documented in <a href=\"#!/api/Backbone.PageableCollection-method-parse\" rel=\"Backbone.PageableCollection-method-parse\" class=\"docClass\">parse</a>. If it exists, a state object is\nreturned by mapping the server state keys to this pageable collection\ninstance's query parameter keys using <code>queryParams</code>.</p>\n\n<p>It is <strong>NOT</strong> neccessary to return a full state object complete with all\nthe mappings defined in <a href=\"#!/api/Backbone.PageableCollection-property-queryParams\" rel=\"Backbone.PageableCollection-property-queryParams\" class=\"docClass\">queryParams</a>. Any state object resulted is merged\nwith a copy of the current pageable collection state and checked for\nsanity before actually updating. Most of the time, simply providing a new\n<code>totalRecords</code> value is enough to trigger a full pagination state\nrecalculation.</p>\n\n<pre><code>parseState: function (resp, queryParams, state) {\n  return {totalRecords: resp.total_entries};\n}\n</code></pre>\n\n<p>This method <strong>MUST</strong> return a new state object instead of directly\nmodifying the <a href=\"#!/api/Backbone.PageableCollection-property-state\" rel=\"Backbone.PageableCollection-property-state\" class=\"docClass\">state</a> object. The behavior of directly modifying <a href=\"#!/api/Backbone.PageableCollection-property-state\" rel=\"Backbone.PageableCollection-property-state\" class=\"docClass\">state</a> is\nundefined.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>resp</span> : Object<div class='sub-desc'><p>The deserialized response data from the server.</p>\n</div></li><li><span class='pre'>queryParams</span> : Object<div class='sub-desc'><p>A copy of <a href=\"#!/api/Backbone.PageableCollection-property-queryParams\" rel=\"Backbone.PageableCollection-property-queryParams\" class=\"docClass\">queryParams</a>.</p>\n</div></li><li><span class='pre'>state</span> : Object<div class='sub-desc'><p>A copy of <a href=\"#!/api/Backbone.PageableCollection-property-state\" rel=\"Backbone.PageableCollection-property-state\" class=\"docClass\">state</a>.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>A new (partial) state object.</p>\n</div></li></ul></div></div></div><div id='method-setPageSize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backbone.PageableCollection'>Backbone.PageableCollection</span><br/></div><a href='#!/api/Backbone.PageableCollection-method-setPageSize' class='name expandable'>setPageSize</a>( <span class='pre'>pageSize, [options]</span> ) : XMLHttpRequest|<a href=\"#!/api/Backbone.PageableCollection\" rel=\"Backbone.PageableCollection\" class=\"docClass\">Backbone.PageableCollection</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Change the page size of this collection. ...</div><div class='long'><p>Change the page size of this collection.</p>\n\n<p>For server mode operations, changing the page size will trigger a <a href=\"#!/api/Backbone.PageableCollection-method-fetch\" rel=\"Backbone.PageableCollection-method-fetch\" class=\"docClass\">fetch</a>\nand subsequently a <code>reset</code> event.</p>\n\n<p>For client mode operations, changing the page size will <code>reset</code> the\ncurrent page by recalculating the current page boundary on the client\nside.</p>\n\n<p>If <code>options.fetch</code> is true, a fetch can be forced if the collection is in\nclient mode.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>pageSize</span> : number<div class='sub-desc'><p>The new page size to set to <a href=\"#!/api/Backbone.PageableCollection-property-state\" rel=\"Backbone.PageableCollection-property-state\" class=\"docClass\">state</a>.</p>\n</div></li><li><span class='pre'>options</span> : Object (optional)<div class='sub-desc'><p><a href=\"#!/api/Backbone.PageableCollection-method-fetch\" rel=\"Backbone.PageableCollection-method-fetch\" class=\"docClass\">fetch</a> options.</p>\n<ul><li><span class='pre'>fetch</span> : boolean (optional)<div class='sub-desc'><p>If <code>true</code>, force a fetch in client mode.</p>\n</div></li></ul></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>XMLHttpRequest|<a href=\"#!/api/Backbone.PageableCollection\" rel=\"Backbone.PageableCollection\" class=\"docClass\">Backbone.PageableCollection</a></span><div class='sub-desc'><p>The XMLHttpRequest\nfrom fetch or this.</p>\n</div></li></ul><h3 class='pa'>Throws</h3><ul><li><span class='pre'>TypeError</span><div class='sub-desc'><p>If <code>pageSize</code> is not a finite integer.</p>\n</div></li><li><span class='pre'>RangeError</span><div class='sub-desc'><p>If <code>pageSize</code> is less than 1.</p>\n</div></li></ul></div></div></div><div id='method-setSorting' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backbone.PageableCollection'>Backbone.PageableCollection</span><br/></div><a href='#!/api/Backbone.PageableCollection-method-setSorting' class='name expandable'>setSorting</a>( <span class='pre'>sortKey, [order], [options]</span> ) : <a href=\"#!/api/Backbone.PageableCollection\" rel=\"Backbone.PageableCollection\" class=\"docClass\">Backbone.PageableCollection</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Adjusts the sorting for this pageable collection. ...</div><div class='long'><p>Adjusts the sorting for this pageable collection.</p>\n\n<p>Given a <code>sortKey</code> and an <code>order</code>, sets <code>state.sortKey</code> and\n<code>state.order</code>. A comparator can be applied on the client side to sort in\nthe order defined if <code>options.side</code> is <code>\"client\"</code>. By default the\ncomparator is applied to the <a href=\"#!/api/Backbone.PageableCollection-property-fullCollection\" rel=\"Backbone.PageableCollection-property-fullCollection\" class=\"docClass\">fullCollection</a>. Set <code>options.full</code> to\n<code>false</code> to apply a comparator to the current page under any mode. Setting\n<code>sortKey</code> to <code>null</code> removes the comparator from both the current page and\nthe full collection.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>sortKey</span> : string<div class='sub-desc'><p>See <code>state.sortKey</code>.</p>\n</div></li><li><span class='pre'>order</span> : number (optional)<div class='sub-desc'><p>See <code>state.order</code>.</p>\n<p>Defaults to: <code>this.state.order</code></p></div></li><li><span class='pre'>options</span> : Object (optional)<div class='sub-desc'>\n<ul><li><span class='pre'>side</span> : \"server\"|\"client\" (optional)<div class='sub-desc'><p>By default, <code>\"client\"</code> if\n<code>mode</code> is <code>\"client\"</code>, <code>\"server\"</code> otherwise.</p>\n</div></li><li><span class='pre'>full</span> : boolean (optional)<div class='sub-desc'><p>Defaults to: <code>true</code></p></div></li></ul></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Backbone.PageableCollection\" rel=\"Backbone.PageableCollection\" class=\"docClass\">Backbone.PageableCollection</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-switchMode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backbone.PageableCollection'>Backbone.PageableCollection</span><br/></div><a href='#!/api/Backbone.PageableCollection-method-switchMode' class='name expandable'>switchMode</a>( <span class='pre'>[mode], [options]</span> ) : XMLHttpRequest|<a href=\"#!/api/Backbone.PageableCollection\" rel=\"Backbone.PageableCollection\" class=\"docClass\">Backbone.PageableCollection</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Switching between client, server and infinite mode. ...</div><div class='long'><p>Switching between client, server and infinite mode.</p>\n\n<p>If switching from client to server mode, the <a href=\"#!/api/Backbone.PageableCollection-property-fullCollection\" rel=\"Backbone.PageableCollection-property-fullCollection\" class=\"docClass\">fullCollection</a> is emptied\nfirst and then deleted and a fetch is immediately issued for the current\npage from the server. Pass <code>false</code> to <code>options.fetch</code> to skip fetching.</p>\n\n<p>If switching to infinite mode, and if <code>options.models</code> is given for an\narray of models, #links will be populated with a URL per page, using the\ndefault URL for this collection.</p>\n\n<p>If switching from server to client mode, all of the pages are immediately\nrefetched. If you have too many pages, you can pass <code>false</code> to\n<code>options.fetch</code> to skip fetching.</p>\n\n<p>If switching to any mode from infinite mode, the #links will be deleted.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>mode</span> : \"server\"|\"client\"|\"infinite\" (optional)<div class='sub-desc'><p>The mode to switch to.</p>\n</div></li><li><span class='pre'>options</span> : Object (optional)<div class='sub-desc'>\n<ul><li><span class='pre'>fetch</span> : boolean (optional)<div class='sub-desc'><p>If <code>false</code>, no fetching is done.</p>\n<p>Defaults to: <code>true</code></p></div></li><li><span class='pre'>resetState</span> : boolean (optional)<div class='sub-desc'><p>If 'false', the state is not\nreset, but checked for sanity instead.</p>\n<p>Defaults to: <code>true</code></p></div></li></ul></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>XMLHttpRequest|<a href=\"#!/api/Backbone.PageableCollection\" rel=\"Backbone.PageableCollection\" class=\"docClass\">Backbone.PageableCollection</a></span><div class='sub-desc'><p>The XMLHttpRequest\nfrom fetch or this if <code>options.fetch</code> is <code>false</code>.</p>\n</div></li></ul></div></div></div><div id='method-sync' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backbone.PageableCollection'>Backbone.PageableCollection</span><br/></div><a href='#!/api/Backbone.PageableCollection-method-sync' class='name expandable'>sync</a>( <span class='pre'>method, model, [options]</span> ) : XMLHttpRequest</div><div class='description'><div class='short'>Overidden to make getPage compatible with Zepto. ...</div><div class='long'><p>Overidden to make <code>getPage</code> compatible with Zepto.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>method</span> : string<div class='sub-desc'>\n</div></li><li><span class='pre'>model</span> : Backbone.Model|Backbone.Collection<div class='sub-desc'>\n</div></li><li><span class='pre'>options</span> : Object (optional)<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>XMLHttpRequest</span><div class='sub-desc'>\n</div></li></ul></div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static Methods</h3><div id='static-method-noConflict' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backbone.PageableCollection'>Backbone.PageableCollection</span><br/></div><a href='#!/api/Backbone.PageableCollection-static-method-noConflict' class='name expandable'>noConflict</a>( <span class='pre'></span> ) : <a href=\"#!/api/Backbone.PageableCollection\" rel=\"Backbone.PageableCollection\" class=\"docClass\">Backbone.PageableCollection</a><strong class='static signature' >static</strong></div><div class='description'><div class='short'>BROWSER ONLY\n\nIf you already have an object named PageableCollection attached to the\nBackbone module, you can use thi...</div><div class='long'><p><strong>BROWSER ONLY</strong></p>\n\n<p>If you already have an object named <code>PageableCollection</code> attached to the\n<code>Backbone</code> module, you can use this to return a local reference to this\n<a href=\"#!/api/Backbone.PageableCollection\" rel=\"Backbone.PageableCollection\" class=\"docClass\">Backbone.PageableCollection</a> class and reset the name\n<a href=\"#!/api/Backbone.PageableCollection\" rel=\"Backbone.PageableCollection\" class=\"docClass\">Backbone.PageableCollection</a> to its previous definition.</p>\n\n<pre><code>// The left hand side gives you a reference to this\n// <a href=\"#!/api/Backbone.PageableCollection\" rel=\"Backbone.PageableCollection\" class=\"docClass\">Backbone.PageableCollection</a> implementation, the right hand side\n// resets <a href=\"#!/api/Backbone.PageableCollection\" rel=\"Backbone.PageableCollection\" class=\"docClass\">Backbone.PageableCollection</a> to your other\n// <a href=\"#!/api/Backbone.PageableCollection\" rel=\"Backbone.PageableCollection\" class=\"docClass\">Backbone.PageableCollection</a>.\nvar PageableCollection = <a href=\"#!/api/Backbone.PageableCollection-static-method-noConflict\" rel=\"Backbone.PageableCollection-static-method-noConflict\" class=\"docClass\">Backbone.PageableCollection.noConflict</a>();\n</code></pre>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Backbone.PageableCollection\" rel=\"Backbone.PageableCollection\" class=\"docClass\">Backbone.PageableCollection</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>",
  "parentMixins": [

  ],
  "members": {
    "cfg": [

    ],
    "property": [
      {
        "meta": {
        },
        "owner": "Backbone.PageableCollection",
        "tagname": "property",
        "name": "fullCollection",
        "id": "property-fullCollection"
      },
      {
        "meta": {
        },
        "owner": "Backbone.PageableCollection",
        "tagname": "property",
        "name": "mode",
        "id": "property-mode"
      },
      {
        "meta": {
        },
        "owner": "Backbone.PageableCollection",
        "tagname": "property",
        "name": "queryParams",
        "id": "property-queryParams"
      },
      {
        "meta": {
        },
        "owner": "Backbone.PageableCollection",
        "tagname": "property",
        "name": "state",
        "id": "property-state"
      }
    ],
    "css_var": [

    ],
    "method": [
      {
        "meta": {
          "private": true
        },
        "owner": "Backbone.PageableCollection",
        "tagname": "method",
        "name": "_checkState",
        "id": "method-_checkState"
      },
      {
        "meta": {
          "private": true
        },
        "owner": "Backbone.PageableCollection",
        "tagname": "method",
        "name": "_makeCollectionEventHandler",
        "id": "method-_makeCollectionEventHandler"
      },
      {
        "meta": {
          "protected": true
        },
        "owner": "Backbone.PageableCollection",
        "tagname": "method",
        "name": "_makeComparator",
        "id": "method-_makeComparator"
      },
      {
        "meta": {
          "private": true
        },
        "owner": "Backbone.PageableCollection",
        "tagname": "method",
        "name": "_makeFullCollection",
        "id": "method-_makeFullCollection"
      },
      {
        "meta": {
        },
        "owner": "Backbone.PageableCollection",
        "tagname": "method",
        "name": "fetch",
        "id": "method-fetch"
      },
      {
        "meta": {
          "chainable": true
        },
        "owner": "Backbone.PageableCollection",
        "tagname": "method",
        "name": "getFirstPage",
        "id": "method-getFirstPage"
      },
      {
        "meta": {
          "chainable": true
        },
        "owner": "Backbone.PageableCollection",
        "tagname": "method",
        "name": "getLastPage",
        "id": "method-getLastPage"
      },
      {
        "meta": {
          "chainable": true
        },
        "owner": "Backbone.PageableCollection",
        "tagname": "method",
        "name": "getNextPage",
        "id": "method-getNextPage"
      },
      {
        "meta": {
          "chainable": true
        },
        "owner": "Backbone.PageableCollection",
        "tagname": "method",
        "name": "getPage",
        "id": "method-getPage"
      },
      {
        "meta": {
          "chainable": true
        },
        "owner": "Backbone.PageableCollection",
        "tagname": "method",
        "name": "getPageByOffset",
        "id": "method-getPageByOffset"
      },
      {
        "meta": {
          "chainable": true
        },
        "owner": "Backbone.PageableCollection",
        "tagname": "method",
        "name": "getPreviousPage",
        "id": "method-getPreviousPage"
      },
      {
        "meta": {
        },
        "owner": "Backbone.PageableCollection",
        "tagname": "method",
        "name": "hasNext",
        "id": "method-hasNext"
      },
      {
        "meta": {
        },
        "owner": "Backbone.PageableCollection",
        "tagname": "method",
        "name": "hasPrevious",
        "id": "method-hasPrevious"
      },
      {
        "meta": {
        },
        "owner": "Backbone.PageableCollection",
        "tagname": "method",
        "name": "initialize",
        "id": "method-initialize"
      },
      {
        "meta": {
        },
        "owner": "Backbone.PageableCollection",
        "tagname": "method",
        "name": "parse",
        "id": "method-parse"
      },
      {
        "meta": {
        },
        "owner": "Backbone.PageableCollection",
        "tagname": "method",
        "name": "parseLinks",
        "id": "method-parseLinks"
      },
      {
        "meta": {
        },
        "owner": "Backbone.PageableCollection",
        "tagname": "method",
        "name": "parseRecords",
        "id": "method-parseRecords"
      },
      {
        "meta": {
        },
        "owner": "Backbone.PageableCollection",
        "tagname": "method",
        "name": "parseState",
        "id": "method-parseState"
      },
      {
        "meta": {
          "chainable": true
        },
        "owner": "Backbone.PageableCollection",
        "tagname": "method",
        "name": "setPageSize",
        "id": "method-setPageSize"
      },
      {
        "meta": {
          "chainable": true
        },
        "owner": "Backbone.PageableCollection",
        "tagname": "method",
        "name": "setSorting",
        "id": "method-setSorting"
      },
      {
        "meta": {
          "chainable": true
        },
        "owner": "Backbone.PageableCollection",
        "tagname": "method",
        "name": "switchMode",
        "id": "method-switchMode"
      },
      {
        "meta": {
        },
        "owner": "Backbone.PageableCollection",
        "tagname": "method",
        "name": "sync",
        "id": "method-sync"
      }
    ],
    "event": [

    ],
    "css_mixin": [

    ]
  },
  "inheritable": null,
  "singleton": false,
  "override": null,
  "private": null,
  "name": "Backbone.PageableCollection",
  "mixins": [

  ],
  "statics": {
    "cfg": [

    ],
    "property": [

    ],
    "css_var": [

    ],
    "method": [
      {
        "meta": {
          "static": true
        },
        "owner": "Backbone.PageableCollection",
        "tagname": "method",
        "name": "noConflict",
        "id": "static-method-noConflict"
      }
    ],
    "event": [

    ],
    "css_mixin": [

    ]
  },
  "linenr": 124,
  "id": "class-Backbone.PageableCollection",
  "html_meta": {
  },
  "alternateClassNames": [

  ],
  "aliases": {
  }
});
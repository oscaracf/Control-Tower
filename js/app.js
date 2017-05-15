$(document).ready(function() {
    $('#table-pagination').DataTable({
    	 "dataTables_filter":   false,
    	 "pagingType": "full_numbers",
    	 "lengthMenu": [[10, -1], [15, "All"]],
    	 "language": {
		    "paginate": {
		      "previous": "«",
		      "next": "»",
		      "first": "&larr; Older",
		      "last": "Newer &rarr;"
		    }
		  }
    });
    $('.pagination-message').DataTable({
    	 "dataTables_filter":   false,
    	 "pagingType": "full_numbers",
    	 "lengthMenu": [[5, -1], [2, "All"]],
    	 "language": {
		    "paginate": {
		      "previous": "«",
		      "next": "»",
		      "first": "&larr; Older",
		      "last": "Newer &rarr;"
		    }
		  }
    });
    $('.pagination-document').DataTable({
    	 "dataTables_filter":   false,
    	 "pagingType": "full_numbers",
    	 "lengthMenu": [[5, -1], [2, "All"]],
    	 "language": {
		    "paginate": {
		      "previous": "«",
		      "next": "»",
		      "first": "&larr; Older",
		      "last": "Newer &rarr;"
		    }
		  }
    });
    $('.pagination-history').DataTable({
    	 "dataTables_filter":   false,
    	 "pagingType": "full_numbers",
    	 "lengthMenu": [[5, -1], [2, "All"]],
    	 "language": {
		    "paginate": {
		      "previous": "«",
		      "next": "»",
		      "first": "&larr; Older",
		      "last": "Newer &rarr;"
		    }
		  }
    });
  $('.input-daterange').datepicker({
        todayBtn: "linked"
   });
  $('[data-toggle="popover"]').popover({
    trigger: 'hover',
    html: true,
    });   

} );


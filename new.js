<div class="row">
<div class="col-md-12">
    <!-- Advanced Tables -->
    <div class="panel panel-default">
        <div class="panel-heading">
             User Information
        </div>
        <div class="panel-body">
            <div class="table-responsive">
                <table class="table table-striped table-bordered table-hover" id="dataTable1">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                            <th>Street</th>
                            <th>Address</th>
                            <th>Country</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        <% 
                        for(var i = 0; i<users.length; i++){
                            for(var j = 0; j<all_user_data.length; j++){
                                if(users[i].username == all_user_data[j].name && all_user_data[j].role == 'User'){

                            %>
                                <tr <%if(i == 0){%>class="odd gradeX"<% } else {%>class = "even gradeC" <%}%>>
                                    
                                    <td class="center"><%=users[i].firstname%></td>
                                    <td><%=users[i].lastname%></td>
                                    <td><%=users[i].username%></td>
                                    <td><%=users[i].street%></td>
                                    <td class="center"><%=users[i].address%></td>
                                    <td class="center"><%=users[i].country%></td>
                                    <td class="center"><%=users[i].phone%></td>
                                </tr>
                        
                        <%    
                                }
                            }
                        }
                    
                        %>
                        
                    </tbody>
                </table>
            </div>
            
        </div>
    </div>
    <!--End Advanced Tables -->
</div>
</div>
<!-- /. ROW  -->

<hr />
<div class="row">
<div class="col-md-12">
    <!-- Advanced Tables -->
    <div class="panel panel-default">
        <div class="panel-heading">
             Admin Information
        </div>
        <div class="panel-body">
            <div class="table-responsive">
                <table class="table table-striped table-bordered table-hover" id="dataTable2">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                            <th>Street</th>
                            <th>Address</th>
                            <th>Country</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        <% 
                        for(var i = 0; i<users.length; i++){
                            for(var j = 0; j<all_user_data.length; j++){
                                if(users[i].username == all_user_data[j].name && all_user_data[j].role == 'Admin'){

                            %>
                                <tr <%if(i == 0){%>class="odd gradeX"<% } else {%>class = "even gradeC" <%}%>>
                                    
                                    <td class="center"><%=users[i].firstname%></td>
                                    <td><%=users[i].lastname%></td>
                                    <td><%=users[i].username%></td>
                                    <td><%=users[i].street%></td>
                                    <td class="center"><%=users[i].address%></td>
                                    <td class="center"><%=users[i].country%></td>
                                    <td class="center"><%=users[i].phone%></td>
                                </tr>
                        
                        <%    
                                }
                            }
                        }
                    
                        %>
                        
                    </tbody>
                </table>
            </div>
            
        </div>
    </div>
    <!--End Advanced Tables -->
</div>
</div>
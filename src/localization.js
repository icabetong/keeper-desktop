import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            app_name: "Ludendorff",
            auth: {
                hello: "Hello.",
                welcome_back: "Welcome Back."
            },
            navigation: {
                manage: "Manage",
                account: "Account",
                home: "Home",
                assets: "Assets",
                users: "Users",
                assignments: "Assignments",
                categories: "Categories",
                departments: "Departments",
                requests: "Requests",
                profile: "Profile",
                settings: "Settings",
            },
            field: {
                email: "Email",
                password: "Password",
                first_name: "First Name",
                last_name: "Last Name",
                permissions: "Permissions",
                position: "Position",
                department: "Department",
                id: 'ID',
                name: 'Name',
                date_created: 'Date Created',
                date_assigned: 'Date Assigned',
                date_returned: 'Date Returned',
                category: "Category",
                category_name: "Category Name", 
                specification: "Specification",
                specification_key: "Name",
                specification_value: "Value",
                status: "Status",
                asset_name: "Asset Name",
                department_name: "Department Name",
                manager: "Manager",
                asset: "Asset",
                user: "User",
                location: "Location",
                remarks: "Remarks",
                old_password: "Old Password",
                new_password: "New Password",
                confirmation_password: "Confirm Password"
            },
            status: {
                operational: "Operational",
                idle: "Idle",
                under_maintenance: "Under Maintenance",
                retired: "Retired",
            },
            permission: {
                read: "Read",
                write: "Write",
                delete: "Delete",
                audit: "Audit",
                manage_users: "Manage Users",
                administrative: "Administrative",
            },
            action: {
                update_avatar: "Update Avatar",
                change_name: "Change Name",
                change_password: "Change Password",
                request_reset: "Request Password Reset"
            },
            button: {
                cancel: "Cancel",
                ok: "Ok",
                continue: "Continue",
                add: "Add",
                save: "Save",
                previous: "Previous",
                next: "Next",
                close: "Close",
                delete: "Delete",
                disable: "Disable",
                enable: "Enable",
                show_menu: "Show menu",
                show_drawer: "Show drawer",
                signin: "Sign in",
                signout: "Sign-out",
                go_to_home: "Go to Home"
            },
            feedback: {
                authenticating: "Authenticating",
                empty_specification_key: "You forgot to enter the key",
                empty_specification_value: "You forgot to enter the value",
                empty_category_name: "You forgot to enter the category name",
                empty_department_name: "You forgot to enter the department name",
                empty_asset_name: "You forgot to enter the asset name",
                empty_first_name: "You forgot to enter the first name",
                empty_last_name: "You forgot to enter the last name",
                empty_department: "You forgot to enter the department",
                empty_email_address: "You forgot to enter the email address",
                empty_position: "You forgot to enter a position",
                asset_created: "Asset created successfully",
                asset_updated: "Asset updated successfully",
                asset_removed: "Asset removed successfully",
                category_created: "Category created successfully",
                category_updated: "Category updated successfully",
                category_removed: "Category removed successfully",
                user_created: "User created successfully",
                user_updated: "User updated successfully",
                user_removed: "User removed successfully",
                department_created: "Department created successfully",
                department_updated: "Department updated successfully",
                department_removed: "Department removed successfully",
                assignment_created: "Assignment created successfully",
                assignment_updated: "Assignment updated successfully",
                assignment_removed: "Assignment removed successfully",
                asset_create_error: "Error creating asset",
                asset_update_error: "Error updating asset",
                asset_remove_error: "Error removing asset",
                category_create_error: "Error creating category",
                category_update_error: "Error updating category",
                category_remove_error: "Error removing category",
                user_create_error: "Error creating user",
                user_update_error: "Error updating user",
                user_remove_error: "Error removing user",
                department_create_error: "Error creating department",
                department_update_error: "Error updating department",
                department_remove_error: "Error removing department",
                assignment_create_error: "Error creating assignment",
                assignment_update_error: "Error updating assignment",
                assignment_remove_error: "Error removing department",
                reset_link_sent: "Password reset link sent"
            },
            error: {
                no_permissions_header: "Insufficient Permissions",
                no_permissions_summary_read: "The page you are trying to reach is restricted. Contact the system administrator for assistance.",
                no_permissions_summary_write: "Unfortunately, you do not have the proper permissions to perform this operation. Contact the system administrators for assistance.",
                not_found_header: "Whoops!",
                not_found_summary: "We can't seem to find that page you're looking for.",
                not_found_info: "Maybe you can head back home and find it there instead?"
            },
            info: {
                user_editor_admin_permission: "Adding \"Administrative\" permission overrides lower permission rules.",
                asset_should_have_assignment: "You'll need to add to to an assignment before it becames \"Operational\"",
                asset_has_assignment: "This asset is assigned; there it's status cannot be changed othan than \"Operational\"",
                asset_has_assignment_delete: "This asset is assigned, therefore it cannot be deleted.",
                category_count_not_zero: "There are assets with this category",
                department_count_not_zero: "There are users who are in this department"
            },
            settings:{
                dark_theme: "Dark Theme",
                dark_theme_summary: "Make the interface darker and easier on the eyes.",
                table_row_density: "Table Row Density",
                table_row_density_summary: "Customize the size of the row paddings in the data table.",
                table_row_density_compact: "Compact",
                table_row_density_standard: "Standard",
                table_row_density_comfortable: "Comfortable"
            },
            dialog: {
                signout: "Sign out?",
                signout_message: "Are you sure you want to end your session? You will need to enter your credentials again next time.",
                asset_remove: "Remove asset?",
                asset_remove_summary: "Do you want to remove this asset? Once finished, this action cannot be undone.",
                category_remove: "Remove category?",
                category_remove_summary: "Do you want to remove this category? Once finished, this action cannot be undone.",
                department_remove: "Remove department?",
                department_remove_summary: "Do you want to remove this department? Once finished, this action cannot be undone.",
                user_disable: "Disable this user account?",
                user_disable_summary: "Are you sure you want to disable this user account? With proper permissions, you can always enable this account in the future.",
                user_enable: "Enable this user account?",
                user_enable_summary: "Are you sure you want to enable this user account? With proper permissions, you can always disable this account in the future.",
                send_reset_link_title: "Send Password Reset Link",
                send_reset_link_message: "If you forgot your password for this account, you can request to reset it requesting a reset email."
            },
            template: {
                full_name: "{{first}} {{last}}",
                count: "Count: {{count}}",
            },
            not_yet_returned: "Not Yet Returned",
            unknown: "Unknown",
            information: "Information",
            actions: "Actions",
            not_set: "Not Set",
            asset_details: "Asset Details",
            category_details: "Category Details",
            specification_details: "Specification Details",
            user_details: "User Details",
            department_details: "Department Details",
            assignment_details: "Assignment Details",
            asset_select: "Select Asset",
            category_select: "Select Category",
            user_select: "Select User",
            department_select: "Select Department",
            view_qr_code: "View QR-Code",
            view_qr_code_summary: "To save the code, right-click the image then select \"Save Image\".",
            empty_asset: "No Assets Added",
            empty_asset_summary: "There are no assets available.",
            empty_category: "No Categories Added",
            empty_category_summary: "There are no categories available that can be used to organize the assets.",
            empty_user: "No Users Added",
            empty_user_summary: "There are no users available.",
            empty_department: "No Departments Added",
            empty_department_summary: "There are no departments available that can be used to assign the users from.",
            empty_assignment: "No Assignments Available",
            empty_assignment_summary: "There are currently no records of assigned assets to the users.",
            empty_scanned_code: "Scan a QR-Code",
            empty_scanned_code_summary: "You'll need to scan a valid QR-Code first to view its embedded data.",
        }
    }
}

i18n.use(initReactI18next)
    .init({
        resources, 
        lng: "en",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
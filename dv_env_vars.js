/*
List of all the global variables being used in the dataverse project, 
to be used as "${dv_env_var.var_name}" in sqlx file 
and "dv_env_var.var_name" in javascript files 
*/
const pvt_batchcontrol_dataset=dataform.projectConfig.defaultSchema;
const pvt_batchcontrol_project=dataform.projectConfig.defaultDatabase; 
const glb_hist_load_ts =dataform.projectConfig.vars.glb_hist_load_ts;
const glb_overlap_days =dataform.projectConfig.vars.glb_overlap_days;
const glb_hash_algorithm =dataform.projectConfig.vars.glb_hash_algorithm;
const glb_null_replace =dataform.projectConfig.vars.glb_null_replace;
const glb_hash_concat =dataform.projectConfig.vars.glb_hash_concat;
const glb_empty_replace =dataform.projectConfig.vars.glb_empty_replace;
const glb_max_vld_to_ts = dataform.projectConfig.vars.glb_max_vld_to_ts;
const glb_env = dataform.projectConfig.vars.env;

// Audit batch control table to be used to pull incremental data in that batch for every model
const glb_dv_audit_batch_control = '`' + pvt_batchcontrol_project+'.'+pvt_batchcontrol_dataset+'.vw_dv_fetch_batch_extract_load_ts`'



module.exports = {
    glb_hist_load_ts,
    glb_overlap_days,
    glb_hash_algorithm,
    glb_null_replace,
    glb_hash_concat,
    glb_empty_replace,
    glb_max_vld_to_ts,
    glb_dv_audit_batch_control,
    glb_env
    };
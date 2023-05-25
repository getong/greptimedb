(function() {var implementors = {
"common_procedure":[["impl TaskFunction&lt;<a class=\"enum\" href=\"common_procedure/error/enum.Error.html\" title=\"enum common_procedure::error::Error\">Error</a>&gt; for <a class=\"struct\" href=\"common_procedure/local/struct.RemoveOutdatedMetaFunction.html\" title=\"struct common_procedure::local::RemoveOutdatedMetaFunction\">RemoveOutdatedMetaFunction</a>"]],
"log_store":[["impl <a class=\"trait\" href=\"common_runtime/repeated_task/trait.TaskFunction.html\" title=\"trait common_runtime::repeated_task::TaskFunction\">TaskFunction</a>&lt;<a class=\"enum\" href=\"log_store/error/enum.Error.html\" title=\"enum log_store::error::Error\">Error</a>&gt; for <a class=\"struct\" href=\"log_store/raft_engine/log_store/struct.PurgeExpiredFilesFunction.html\" title=\"struct log_store::raft_engine::log_store::PurgeExpiredFilesFunction\">PurgeExpiredFilesFunction</a>"]],
"storage":[["impl&lt;S: Checkpoint&lt;Error = <a class=\"enum\" href=\"storage/error/enum.Error.html\" title=\"enum storage::error::Error\">Error</a>&gt;, M: MetaAction&lt;Error = <a class=\"enum\" href=\"storage/error/enum.Error.html\" title=\"enum storage::error::Error\">Error</a>&gt;&gt; <a class=\"trait\" href=\"common_runtime/repeated_task/trait.TaskFunction.html\" title=\"trait common_runtime::repeated_task::TaskFunction\">TaskFunction</a>&lt;<a class=\"enum\" href=\"storage/error/enum.Error.html\" title=\"enum storage::error::Error\">Error</a>&gt; for <a class=\"struct\" href=\"storage/manifest/impl_/struct.ManifestGcTask.html\" title=\"struct storage::manifest::impl_::ManifestGcTask\">ManifestGcTask</a>&lt;S, M&gt;"],["impl&lt;S: LogStore&gt; <a class=\"trait\" href=\"common_runtime/repeated_task/trait.TaskFunction.html\" title=\"trait common_runtime::repeated_task::TaskFunction\">TaskFunction</a>&lt;<a class=\"enum\" href=\"storage/error/enum.Error.html\" title=\"enum storage::error::Error\">Error</a>&gt; for <a class=\"struct\" href=\"storage/flush/scheduler/struct.AutoFlushFunction.html\" title=\"struct storage::flush::scheduler::AutoFlushFunction\">AutoFlushFunction</a>&lt;S&gt;"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()
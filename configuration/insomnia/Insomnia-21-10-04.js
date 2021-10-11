{"_type":"export","__export_format":4,"__export_date":"2021-10-04T15:21:00.480Z","__export_source":"insomnia.desktop.app:v2021.5.3","resources":[{"_id":"req_c9674a80d414490bab29453155b6ee9c","parentId":"fld_7c660db3d43d4465b33bc73372a30252","modified":1633359499287,"created":1633358613488,"url":"http://localhost:3001/delete-lecture-material/:documentId","name":"deleteLectureMaterial","description":"","method":"DELETE","body":{},"parameters":[],"headers":[],"authentication":{},"metaSortKey":-1633358613488,"isPrivate":false,"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"fld_7c660db3d43d4465b33bc73372a30252","parentId":"wrk_b5644b07fcaa4c7db2271fd1082cbd48","modified":1633354844830,"created":1633354844830,"name":"Lecture Materials","description":"","environment":{},"environmentPropertyOrder":null,"metaSortKey":-1633354844830,"_type":"request_group"},{"_id":"wrk_b5644b07fcaa4c7db2271fd1082cbd48","parentId":null,"modified":1633013662009,"created":1633013662009,"name":"File-Management-System-Server","description":"","scope":"collection","_type":"workspace"},{"_id":"req_716c35e198c14893900dab5d3df6e89f","parentId":"fld_7c660db3d43d4465b33bc73372a30252","modified":1633359502582,"created":1633358604234,"url":"http://localhost:3001/update-lecture-material/:documentId","name":"updateLectureMaterial","description":"","method":"PUT","body":{"mimeType":"application/json","text":"{\n\t\"title\": \"updated lecture material\"\n}"},"parameters":[],"headers":[{"name":"Content-Type","value":"application/json","id":"pair_e131003eee564562a3bc19e0f5b567e1"}],"authentication":{},"metaSortKey":-1633358604234,"isPrivate":false,"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"req_b67ee5a5916a4c46b9aa76929940c137","parentId":"fld_7c660db3d43d4465b33bc73372a30252","modified":1633358724313,"created":1633358592825,"url":"http://localhost:3001/search-lecture-materials","name":"searchLectureMaterialsByTitle","description":"","method":"GET","body":{"mimeType":"application/json","text":"{\n\t\"title\": \"lecture material\"\n}"},"parameters":[],"headers":[{"name":"Content-Type","value":"application/json","id":"pair_5db58a156cdb42ad83b1c1c2f0c4300b"}],"authentication":{},"metaSortKey":-1633358592825,"isPrivate":false,"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"req_653809eb16284930a9bb5987a2ab10f2","parentId":"fld_7c660db3d43d4465b33bc73372a30252","modified":1633358669809,"created":1633358583164,"url":"http://localhost:3001/all-lecture-materials","name":"getAllLectureMaterial","description":"","method":"GET","body":{},"parameters":[],"headers":[],"authentication":{},"metaSortKey":-1633358583164,"isPrivate":false,"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"req_45c26e1b0c1046a68620c3764361f08c","parentId":"fld_7c660db3d43d4465b33bc73372a30252","modified":1633358707305,"created":1633358572482,"url":"http://localhost:3001/upload-lecture-material","name":"uploadLectureMaterial","description":"","method":"POST","body":{"mimeType":"application/json","text":"{\n\t\"title\": \"lecture material\",\n\t\"author\": \"tomten\"\n}"},"parameters":[],"headers":[{"name":"Content-Type","value":"application/json","id":"pair_4d290e2724da4668b3530a8abc7db9a1"}],"authentication":{},"metaSortKey":-1633358572482,"isPrivate":false,"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"req_2c04bdc327414e03a5ed531ab3d82bfe","parentId":"fld_4c70566c96b5493b83734f37a67b6629","modified":1633359490679,"created":1633356750888,"url":"http://localhost:3001/delete-exercise/:documentId","name":"deleteExercise","description":"","method":"DELETE","body":{},"parameters":[],"headers":[],"authentication":{},"metaSortKey":-1633356750888,"isPrivate":false,"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"fld_4c70566c96b5493b83734f37a67b6629","parentId":"wrk_b5644b07fcaa4c7db2271fd1082cbd48","modified":1633354835477,"created":1633354835477,"name":"Exercises","description":"","environment":{},"environmentPropertyOrder":null,"metaSortKey":-1633354835477,"_type":"request_group"},{"_id":"req_db96a50ba6354870b40f33a7a31812a3","parentId":"fld_4c70566c96b5493b83734f37a67b6629","modified":1633359494338,"created":1633356730530,"url":"http://localhost:3001/update-exercise/:documentId","name":"updateExercise","description":"","method":"PUT","body":{"mimeType":"application/json","text":"{\n\t\"wow\": \"updated exercise\"\n}"},"parameters":[],"headers":[{"name":"Content-Type","value":"application/json","id":"pair_2cd41557d1dc4294b82df0ad153277f7"}],"authentication":{},"metaSortKey":-1633356730530,"isPrivate":false,"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"req_15cf8c0d70954977902e7ba25a53ed27","parentId":"fld_4c70566c96b5493b83734f37a67b6629","modified":1633357270742,"created":1633356719164,"url":"http://localhost:3001/search-exercises","name":"searchExercisesByTitle","description":"","method":"GET","body":{"mimeType":"application/json","text":"{\n\t\"wow\": \"such exercise\"\n}"},"parameters":[],"headers":[{"name":"Content-Type","value":"application/json","id":"pair_941d640dc8ca401d8dd2927939e62810"}],"authentication":{},"metaSortKey":-1633356719164,"isPrivate":false,"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"req_92b3ccc2c7594442a4d7201e0e63bd1a","parentId":"fld_4c70566c96b5493b83734f37a67b6629","modified":1633356809507,"created":1633356703117,"url":"http://localhost:3001/all-exercises","name":"getAllExercises","description":"","method":"GET","body":{},"parameters":[],"headers":[],"authentication":{},"metaSortKey":-1633356703117,"isPrivate":false,"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"req_b5b7428fab9749bcadf34feb14eb1ef2","parentId":"fld_4c70566c96b5493b83734f37a67b6629","modified":1633357897890,"created":1633356686448,"url":"http://localhost:3001/upload-exercise","name":"uploadExercise","description":"","method":"POST","body":{"mimeType":"application/json","text":"{\n\t\"wow\": \"such exercise\",\n\t\"mama\": \"tomten\"\n}"},"parameters":[],"headers":[{"name":"Content-Type","value":"application/json","id":"pair_6660751de82349fe95c466de7292c102"}],"authentication":{},"metaSortKey":-1633356686448,"isPrivate":false,"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"req_7c55988a5d3a401688ccc9dd4b9fd691","parentId":"fld_6509a13a2956456c92bafa74fc6f876f","modified":1633359484788,"created":1633355911188,"url":"http://localhost:3001/delete-examination/:documentId","name":"deleteExamination","description":"","method":"DELETE","body":{},"parameters":[],"headers":[],"authentication":{},"metaSortKey":-1633355911188,"isPrivate":false,"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"fld_6509a13a2956456c92bafa74fc6f876f","parentId":"wrk_b5644b07fcaa4c7db2271fd1082cbd48","modified":1633354825888,"created":1633354825888,"name":"Examinations","description":"","environment":{},"environmentPropertyOrder":null,"metaSortKey":-1633354825888,"_type":"request_group"},{"_id":"req_34ab716ed2124c14913e55e80d17ab07","parentId":"fld_6509a13a2956456c92bafa74fc6f876f","modified":1633359481532,"created":1633355819961,"url":"http://localhost:3001/update-examination/:documentId","name":"updateExamination","description":"","method":"PUT","body":{"mimeType":"application/json","text":"{\n\t\"title\": \"updated examination\"\n}"},"parameters":[],"headers":[{"name":"Content-Type","value":"application/json","id":"pair_55dc71fc91594a919a1542751d4f595a"}],"authentication":{},"metaSortKey":-1633355819961,"isPrivate":false,"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"req_12886671e7334aefb7593ac26cd5a31b","parentId":"fld_6509a13a2956456c92bafa74fc6f876f","modified":1633355793126,"created":1633355767338,"url":"http://localhost:3001/search-examination","name":"searchExaminationsByTitle","description":"","method":"GET","body":{"mimeType":"application/json","text":"{\n\t\"title\": \"examination 1\"\n}"},"parameters":[],"headers":[{"name":"Content-Type","value":"application/json","id":"pair_ffe92259810e4f94ab5078079859d7d3"}],"authentication":{},"metaSortKey":-1633355767338,"isPrivate":false,"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"req_384af118b5a04e18b3f86a02f7239c16","parentId":"fld_6509a13a2956456c92bafa74fc6f876f","modified":1633355751562,"created":1633355734346,"url":"http://localhost:3001/all-examinations","name":"getAllExaminations","description":"","method":"GET","body":{},"parameters":[],"headers":[],"authentication":{},"metaSortKey":-1633355734346,"isPrivate":false,"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"req_6284b8bbc1604d2094c307c3d6b16a8e","parentId":"fld_6509a13a2956456c92bafa74fc6f876f","modified":1633355711342,"created":1633355695936,"url":"http://localhost:3001/upload-examination","name":"uploadExamination","description":"","method":"POST","body":{"mimeType":"application/json","text":"{\n\t\"title\": \"examination 1\",\n\t\"author\": \"oscar\"\n}"},"parameters":[],"headers":[{"name":"Content-Type","value":"application/json","id":"pair_282504fafc544994b4c0c229b26ed064"}],"authentication":{},"metaSortKey":-1633355695936,"isPrivate":false,"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"req_a391b3ca9ce24c8ebfb8ea239215f843","parentId":"fld_0b565446bcc6493987e86d6da467d3db","modified":1633359474679,"created":1633354670835,"url":"http://localhost:3001/delete-assignment/:documentId","name":"deleteAssignmnet","description":"","method":"DELETE","body":{},"parameters":[],"headers":[],"authentication":{},"metaSortKey":-1633354670835,"isPrivate":false,"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"fld_0b565446bcc6493987e86d6da467d3db","parentId":"wrk_b5644b07fcaa4c7db2271fd1082cbd48","modified":1633354195379,"created":1633354195379,"name":"Assignments","description":"","environment":{},"environmentPropertyOrder":null,"metaSortKey":-1633354195379,"_type":"request_group"},{"_id":"req_9d721c5c6851486e8c0f6d19094ecb6f","parentId":"fld_0b565446bcc6493987e86d6da467d3db","modified":1633359470299,"created":1633354517466,"url":"http://localhost:3001/update-assignment/:documentId","name":"updateAssignment","description":"","method":"PUT","body":{"mimeType":"application/json","text":"{\n\t\"title\": \"testing update\"\n}"},"parameters":[],"headers":[{"name":"Content-Type","value":"application/json","id":"pair_9a53d8930f8e48bf9bb7e3fadc988444"}],"authentication":{},"metaSortKey":-1633354517466,"isPrivate":false,"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"req_b2d8ca4b457742bf8416004589f600d0","parentId":"fld_0b565446bcc6493987e86d6da467d3db","modified":1633354494502,"created":1633354434817,"url":"http://localhost:3001/search-assignment","name":"searchAssignmentsByTitle","description":"","method":"GET","body":{"mimeType":"application/json","text":"{\n\t\"title\": \"assignmet 1\"\n}"},"parameters":[],"headers":[{"name":"Content-Type","value":"application/json","id":"pair_ecc24e60eea14e968b502b6bebf3fbd2"}],"authentication":{},"metaSortKey":-1633354434817,"isPrivate":false,"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"req_8c70fc6bc37d4390be7dcc835d77797f","parentId":"fld_0b565446bcc6493987e86d6da467d3db","modified":1633354414607,"created":1633354392714,"url":"http://localhost:3001/all-assignments","name":"getAllAssignments","description":"","method":"GET","body":{},"parameters":[],"headers":[],"authentication":{},"metaSortKey":-1633354392714,"isPrivate":false,"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"req_9aee2f32dfde4062910a85fab26301b7","parentId":"fld_0b565446bcc6493987e86d6da467d3db","modified":1633354304969,"created":1633354223703,"url":"http://localhost:3001/upload-assignment","name":"uploadAssignment","description":"","method":"POST","body":{"mimeType":"application/json","text":"{\n\t\"title\": \"assignmet 1\",\n\t\"author\": \"oscar\"\n}"},"parameters":[],"headers":[{"name":"Content-Type","value":"application/json","id":"pair_2832a38636504c029a79d4aae4d5c75c"}],"authentication":{},"metaSortKey":-1633354223703,"isPrivate":false,"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"env_37d8556ac072551dc00ab7e9de3e6977c60abd92","parentId":"wrk_b5644b07fcaa4c7db2271fd1082cbd48","modified":1633013662014,"created":1633013662014,"name":"Base Environment","data":{},"dataPropertyOrder":null,"color":null,"isPrivate":false,"metaSortKey":1633013662014,"_type":"environment"},{"_id":"jar_37d8556ac072551dc00ab7e9de3e6977c60abd92","parentId":"wrk_b5644b07fcaa4c7db2271fd1082cbd48","modified":1633013662015,"created":1633013662015,"name":"Default Jar","cookies":[],"_type":"cookie_jar"},{"_id":"spc_3fb9fb18ec2849d9b4197d1582ed7fae","parentId":"wrk_b5644b07fcaa4c7db2271fd1082cbd48","modified":1633013662010,"created":1633013662010,"fileName":"File-Management-System-Server","contents":"","contentType":"yaml","_type":"api_spec"}]}
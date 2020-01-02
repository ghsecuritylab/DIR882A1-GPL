/*****************************************************************************
 *
 * INTEL CONFIDENTIAL
 * Copyright (c) 2016 Intel Corporation All Rights Reserved
 *
 * The source code contained or described herein and all documents related
 * to the source code ("Material") are owned by Intel Corporation or its
 * suppliers or licensors. Title to the Material remains with Intel
 * Corporation or its suppliers and licensors. The Material contains trade
 * secrets and proprietary and confidential information of Intel or its
 * suppliers and licensors. The Material is protected by worldwide copyright
 * and trade secret laws and treaty provisions. No part of the Material may
 * be used, copied, reproduced, modified, published, uploaded, posted,
 * transmitted, distributed, or disclosed in any way without Intel's prior
 * express written permission.
 *
 * No license under any patent, copyright, trade secret or other intellectual
 * property right is granted to or conferred upon you by disclosure or
 * delivery of the Materials, either expressly, by implication, inducement,
 * estoppel or otherwise. Any license under such intellectual property rights
 * must be express and approved by Intel in writing.
 *
****************************************************************************/

#ifndef STORE_ROUTER_ID_H
#define STORE_ROUTER_ID_H

#include "router_registration.h"
#include "shgw_utils.h"
#include "shgw_query_sqlite.h"

STATUS_CODE store_router_id(char *router_id);

int retrieve_routerid_sqlite_cb(void *data, int argc, char **argv,
		char **azColName);

STATUS_CODE get_router_id_from_db(char **router_id);

char * form_insert_query(const char *key, const char *value);

STATUS_CODE update_db_with_rr_details(rr_details_t *rr_details);

#endif
//
//  WeexPickerModule.m
//  WeexPluginTemp
//
//  Created by  on 17/3/14.
//  Copyright © 2017年 . All rights reserved.
//

#import "WeexPickerModule.h"
#import <WeexPluginLoader/WeexPluginLoader.h>

@implementation WeexPickerModule

WX_PlUGIN_EXPORT_MODULE(weexPicker, WeexPickerModule)
WX_EXPORT_METHOD(@selector(show))

/**
 create actionsheet
 
 @param options items
 @param callback
 */
-(void)show
{
    UIAlertView *alertview = [[UIAlertView alloc] initWithTitle:@"title" message:@"module weexPicker is created sucessfully" delegate:self cancelButtonTitle:@"cancel" otherButtonTitles:@"ok", nil];
    [alertview show];
    
}

@end

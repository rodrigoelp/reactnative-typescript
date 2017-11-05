//
//  FontLookup.m
//  interop
//
//  Created by Rodrigo Landaeta on 4/11/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import "FontLookup.h"

@implementation FontLookup

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(getRegisteredFonts:(RCTResponseSenderBlock)callback) {
  NSArray *sortedFonts = [[UIFont familyNames]
                          sortedArrayUsingSelector:(@selector(localizedCaseInsensitiveCompare:))];
  
  callback(@[[NSNull null], sortedFonts]);
}

@end

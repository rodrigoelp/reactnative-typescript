//
//  FontLookup.m
//  typography
//
//  Created by Rodrigo Landaeta on 5/11/17.
//

#import "FontLookup.h"

@implementation FontLookup

RCT_EXPORT_MODULE(); // exporting this class as a module named "FontLookup"

// Now, I need to implement a method that will return a list of fonts.
// this should've been dead easy... should have been something like
// - NSArray getFontFamilies;
// But the method needs to be exported... and reactnative does not seem to understand
// methods can return stuff... so... you either implement a method that takes in a callback
// or implement a method that takes in two callbacks (and will be exposed in react as a promise)
RCT_EXPORT_METHOD(getFontFamilies:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
{
  @try {
    NSArray *familyNames = [UIFont familyNames];
    resolve(familyNames);
  }
  @catch (NSException *exception) {
    NSMutableDictionary *info = [NSMutableDictionary dictionary];
    [info setValue:exception.name forKey:@"ExceptionName"];
    [info setValue:exception.reason forKey:@"ExceptionReason"];
    [info setValue:exception.callStackReturnAddresses forKey:@"callStackReturnAddress"];
    [info setValue:exception.callStackSymbols forKey:@"callStackSymbols"];
    [info setValue:exception.userInfo forKey:@"userInfo"];
    NSError *error = [[NSError alloc] initWithDomain:@"typography.ios" code:0 userInfo:info];
    reject(@"getting_fonts", @"Could not get the list of fonts from the system", error);
  }
  
}

@end
